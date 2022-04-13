-module(auth_hand_saml_consume_integration_tests).

-include("auth_types.hrl").
-include_lib("hoax/include/hoax.hrl").
-include_lib("esaml/include/esaml.hrl").

-compile([export_all]).

handle_parameterized_fixture_test_() ->
    hoax:parameterized_fixture(?MODULE, "handle_", setup, teardown).

setup() ->
    error_logger:tty(false),
    application:set_env(auth, saml_entity_id, "https://saml-for-tests.chef.io"),
    eu_application:setup(),
    eu_database:setup(),
    eu_data:with_enterprise(<<"cd">>,
        fun(Enterprise) ->
            User = eu_data:fetch_or_create_user(Enterprise, <<"SamlTest@whatever.com">>, <<"saml">>),
            [Enterprise, User]
        end).

teardown(_) ->
    eu_database:teardown(),
    application:set_env(auth, saml_entity_id, undefined),
    eu_application:teardown(),
    error_logger:tty(true).

handle_when_assertion_is_valid_and_attributes_present_updates_saml_user([Enterprise, User]) ->
    TTL = 3600,
    State = #handler{read_ttl = TTL},
    ok = application:set_env(delivery, read_ttl_secs, TTL),
    EntName = deliv_enterprise:getval(name, Enterprise),
    UserName = deliv_user:getval(name, User),
    SSOLoginUrl = <<"bomb.com/login">>,
    SSOBinding =  <<"HTTP-Redirect">>,
    IdpUrl = <<"bomb.com">>,
    NameId = <<"urn:oasis:names:tc:SAML:2.0:nameid-format:entity">>,
    ExpectedUser = deliv_user:fromlist([{name, UserName},
                                        {user_type, <<"saml">>},
                                        {first_name, <<"Saml">>},
                                        {last_name, <<"Jackson">>},
                                        {email, <<"saml@saml.io">>}]),
    Cert = <<"MIIDPDCCAiQCCQDydJgOlszqbzANBgkqhkiG9w0BAQUFADBgMQswCQYDVQQGEwJVUzETMBEGA1UECBMKQ2FsaWZvcm5pYTEWMBQGA1UEBxMNU2FuIEZyYW5jaXNjbzEQMA4GA1UEChMHSmFua3lDbzESMBAGA1UEAxMJbG9jYWxob3N0MB4XDTE0MDMxMjE5NDYzM1oXDTI3MTExOTE5NDYzM1owYDELMAkGA1UEBhMCVVMxEzARBgNVBAgTCkNhbGlmb3JuaWExFjAUBgNVBAcTDVNhbiBGcmFuY2lzY28xEDAOBgNVBAoTB0phbmt5Q28xEjAQBgNVBAMTCWxvY2FsaG9zdDCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBAMGvJpRTTasRUSPqcbqCG+ZnTAurnu0vVpIG9lzExnh11o/BGmzu7lB+yLHcEdwrKBBmpepDBPCYxpVajvuEhZdKFx/Fdy6j5mH3rrW0Bh/zd36CoUNjbbhHyTjeM7FN2yF3u9lcyubuvOzr3B3gX66IwJlU46+wzcQVhSOlMk2tXR+fIKQExFrOuK9tbX3JIBUqItpI+HnAow509CnM134svw8PTFLkR6/CcMqnDfDK1m993PyoC1Y+N4X9XkhSmEQoAlAHPI5LHrvuujM13nvtoVYvKYoj7ScgumkpWNEvX652LfXOnKYlkB8ZybuxmFfIkzedQrbJsyOhfL03cMECAwEAATANBgkqhkiG9w0BAQUFAAOCAQEAeHwzqwnzGEkxjzSD47imXaTqtYyETZow7XwBc0ZaFS50qRFJUgKTAmKS1xQBP/qHpStsROT35DUxJAE6NY1Kbq3ZbCuhGoSlY0L7VzVT5tpu4EY8+Dq/u2EjRmmhoL7UkskvIZ2n1DdERtd+YUMTeqYl9co43csZwDno/IKomeN5qaPc39IZjikJ+nUC6kPFKeu/3j9rgHNlRtocI6S1FdtFz9OZMQlpr0JbUt2T3xS/YoQJn6coDmJL5GTiiKM6cOe+Ur1VwzS1JEDbSS2TWWhzq8ojLdrotYLGd9JOsoQhElmz+tMfCFQUFLExinPAyy7YHlSiVX13QH2XTu/iQQ==">>,
    Assertion = #esaml_assertion{recipient = "foo",
                                 issuer = "bomb.com",
                                 subject = #esaml_subject{name = "SamlTest@whatever.com"},
                                 attributes = [{email,"saml@saml.io"},{lastName,"Jackson"},{firstName,"Saml"}]},
    Relay = [],
    application:set_env(delivery, api_proto, "https"),
    application:set_env(delivery, hostname, "delivery.com"),
    {ok, ServiceProvider} = auth_saml_config:service_provider(EntName, Cert),
    ConfigRecord = #saml_config{ent_name = EntName,
                                sso_login_url = SSOLoginUrl,
                                sso_binding = SSOBinding,
                                idp_url = IdpUrl,
                                cert = Cert,
                                name_id = NameId},
    auth_saml_config:upsert(ConfigRecord),
    ConsumeUri = <<"https://delivery.com/api/v0/e/cd/saml/consume">>,

    hoax:mock(auth_saml_cowboy, [
              ?expect(extract_saml_params,
                      ?withArgs([req1]),
                      ?andReturn({saml_encoding, saml_response, Relay, req2})),
              ?expect(validate_assertion,
                      ?withArgs([ServiceProvider, saml_encoding, saml_response]),
                      ?andReturn({ok, Assertion}))]),
    hoax:mock(deliv_token,
              ?expect(assign_token,
                      ?withArgs([EntName, UserName]),
                      ?andReturn({ok, token}))),
    hoax:mock(deliv_web_utils, [
              ?expect(api_url_for,
                      ?withArgs([saml_consume, [EntName]]),
                      ?andReturn(ConsumeUri)),
             ?expect(extract_bindings,
                     ?withArgs([[ent_name], req]),
                     ?andReturn({[EntName], req1})),
              ?expect(make_web_url_for_login,
                      ?withArgs([EntName]),
                      ?andReturn(location)),
              ?expect(protocol,
                      ?withArgs([]),
                      ?andReturn("https")),
              ?expect(set_cookie,
                      ?withArgs([<<"saml-chef-delivery-token">>, token, true, req2]),
                      ?andReturn({ok, req3})),
              ?expect(set_cookie,
                      ?withArgs([<<"saml-chef-delivery-user">>, UserName, true, req3]),
                      ?andReturn({ok, req4})),
              ?expect(set_cookie,
                      ?withArgs([<<"saml-chef-delivery-ttl">>, list_to_binary(integer_to_list(TTL)), true, req4]),
                      ?andReturn({ok, req5})),
              ?expect(redirect_302,
                      ?withArgs([location, req5, State]),
                      ?andReturn({ok, req6, State}))]),

    Actual = auth_hand_saml_consume:handle(req, State),
    {ok, FetchedUser} = deliv_user:fetch(EntName, UserName),
    ?assertEqual(deliv_user:getval(name, ExpectedUser), UserName),
    ?assertEqual(deliv_user:getval(first_name, ExpectedUser), deliv_user:getval(first_name, FetchedUser)),
    ?assertEqual(deliv_user:getval(user_type, ExpectedUser), deliv_user:getval(user_type, FetchedUser)),
    ?assertEqual(deliv_user:getval(last_name, ExpectedUser), deliv_user:getval(last_name, FetchedUser)),
    ?assertEqual(deliv_user:getval(email, ExpectedUser), deliv_user:getval(email, FetchedUser)),
    ?assertEqual({ok, req6, State}, Actual),
    ?verifyAll.

handle_when_assertion_is_valid_and_attributes_present_creates_saml_user_with_configured_default_roles([Enterprise, _User]) ->
    TTL = 3600,
    State = #handler{read_ttl = TTL},
    EntName = deliv_enterprise:getval(name, Enterprise),
    SSOLoginUrl = <<"bomb.com/login">>,
    SSOBinding =  <<"HTTP-Redirect">>,
    IdpUrl = <<"bomb.com">>,
    NameId = <<"urn:oasis:names:tc:SAML:2.0:nameid-format:entity">>,
    UserRole = <<"reviewer">>,
    DefaultRoles = [UserRole],
    UserName = "UserNotInAutomate@whatever.com",
    UserNameBin = list_to_binary(UserName),
    Cert = <<"MIIDPDCCAiQCCQDydJgOlszqbzANBgkqhkiG9w0BAQUFADBgMQswCQYDVQQGEwJVUzETMBEGA1UECBMKQ2FsaWZvcm5pYTEWMBQGA1UEBxMNU2FuIEZyYW5jaXNjbzEQMA4GA1UEChMHSmFua3lDbzESMBAGA1UEAxMJbG9jYWxob3N0MB4XDTE0MDMxMjE5NDYzM1oXDTI3MTExOTE5NDYzM1owYDELMAkGA1UEBhMCVVMxEzARBgNVBAgTCkNhbGlmb3JuaWExFjAUBgNVBAcTDVNhbiBGcmFuY2lzY28xEDAOBgNVBAoTB0phbmt5Q28xEjAQBgNVBAMTCWxvY2FsaG9zdDCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBAMGvJpRTTasRUSPqcbqCG+ZnTAurnu0vVpIG9lzExnh11o/BGmzu7lB+yLHcEdwrKBBmpepDBPCYxpVajvuEhZdKFx/Fdy6j5mH3rrW0Bh/zd36CoUNjbbhHyTjeM7FN2yF3u9lcyubuvOzr3B3gX66IwJlU46+wzcQVhSOlMk2tXR+fIKQExFrOuK9tbX3JIBUqItpI+HnAow509CnM134svw8PTFLkR6/CcMqnDfDK1m993PyoC1Y+N4X9XkhSmEQoAlAHPI5LHrvuujM13nvtoVYvKYoj7ScgumkpWNEvX652LfXOnKYlkB8ZybuxmFfIkzedQrbJsyOhfL03cMECAwEAATANBgkqhkiG9w0BAQUFAAOCAQEAeHwzqwnzGEkxjzSD47imXaTqtYyETZow7XwBc0ZaFS50qRFJUgKTAmKS1xQBP/qHpStsROT35DUxJAE6NY1Kbq3ZbCuhGoSlY0L7VzVT5tpu4EY8+Dq/u2EjRmmhoL7UkskvIZ2n1DdERtd+YUMTeqYl9co43csZwDno/IKomeN5qaPc39IZjikJ+nUC6kPFKeu/3j9rgHNlRtocI6S1FdtFz9OZMQlpr0JbUt2T3xS/YoQJn6coDmJL5GTiiKM6cOe+Ur1VwzS1JEDbSS2TWWhzq8ojLdrotYLGd9JOsoQhElmz+tMfCFQUFLExinPAyy7YHlSiVX13QH2XTu/iQQ==">>,
    Assertion = #esaml_assertion{recipient = "foo",
                                 issuer = "bomb.com",
                                 subject = #esaml_subject{name = UserName},
                                 attributes = [{email,"saml@saml.io"},{lastName,"Jackson"},{firstName,"Saml"}]},
    Relay = [],
    application:set_env(delivery, api_proto, "https"),
    application:set_env(delivery, hostname, "delivery.com"),
    {ok, ServiceProvider} = auth_saml_config:service_provider(EntName, Cert),
    ConfigRecord = #saml_config{ent_name = EntName,
                                sso_login_url = SSOLoginUrl,
                                sso_binding = SSOBinding,
                                idp_url = IdpUrl,
                                cert = Cert,
                                name_id = NameId,
                                default_roles = DefaultRoles},
    auth_saml_config:upsert(ConfigRecord),
    ConsumeUri = <<"https://delivery.com/api/v0/e/cd/saml/consume">>,

    hoax:mock(auth_saml_cowboy, [
              ?expect(extract_saml_params,
                      ?withArgs([req1]),
                      ?andReturn({saml_encoding, saml_response, Relay, req2})),
              ?expect(validate_assertion,
                      ?withArgs([ServiceProvider, saml_encoding, saml_response]),
                      ?andReturn({ok, Assertion}))]),
    hoax:mock(deliv_token,
              ?expect(assign_token,
                      ?withArgs([EntName, UserNameBin]),
                      ?andReturn({ok, token}))),
    hoax:mock(deliv_web_utils, [
              ?expect(api_url_for,
                      ?withArgs([saml_consume, [EntName]]),
                      ?andReturn(ConsumeUri)),
             ?expect(extract_bindings,
                     ?withArgs([[ent_name], req]),
                     ?andReturn({[EntName], req1})),
              ?expect(make_web_url_for_login,
                      ?withArgs([EntName]),
                      ?andReturn(location)),
              ?expect(protocol,
                      ?withArgs([]),
                      ?andReturn("https")),
              ?expect(set_cookie,
                      ?withArgs([<<"saml-chef-delivery-token">>, token, true, req2]),
                      ?andReturn({ok, req3})),
              ?expect(set_cookie,
                      ?withArgs([<<"saml-chef-delivery-user">>, UserNameBin, true, req3]),
                      ?andReturn({ok, req4})),
             ?expect(set_cookie,
                      ?withArgs([<<"saml-chef-delivery-ttl">>, list_to_binary(integer_to_list(TTL)), true, req4]),
                      ?andReturn({ok, req5})),
              ?expect(redirect_302,
                      ?withArgs([location, req5, State]),
                      ?andReturn({ok, req6, State}))]),

    Actual = auth_hand_saml_consume:handle(req, State),
    {ok, FetchedUser} = deliv_user:fetch(EntName, UserNameBin),
    FetchedUserName = deliv_user:getval(name, FetchedUser),
    ?assertEqual({[{UserRole,[<<"enterprise">>]}]}, deliv_user:scoped_roles(enterprise, [EntName, FetchedUserName])),
    ?assertEqual({ok, req6, State}, Actual),
    ?verifyAll.

%% for existing installations that are making use of the SAML feature, there is a saml_config persisted to the database
%% that will contain no default roles. The behavior of this version of the application is that all users are created with
%% only the observer role, this test tests specifically for the case where there's no default_roles field in the config record
handle_when_assertion_is_valid_and_attributes_present_and_no_persisted_roles_creates_saml_user_with_mvp_default_roles([Enterprise, _User]) ->
    TTL = 3600,
    State = #handler{read_ttl = TTL},
    EntName = deliv_enterprise:getval(name, Enterprise),
    SSOLoginUrl = <<"bomb.com/login">>,
    SSOBinding =  <<"HTTP-Redirect">>,
    IdpUrl = <<"bomb.com">>,
    NameId = <<"urn:oasis:names:tc:SAML:2.0:nameid-format:entity">>,
    UserName = "UserNotInAutomate@whatever.com",
    UserNameBin = list_to_binary(UserName),
    Cert = <<"MIIDPDCCAiQCCQDydJgOlszqbzANBgkqhkiG9w0BAQUFADBgMQswCQYDVQQGEwJVUzETMBEGA1UECBMKQ2FsaWZvcm5pYTEWMBQGA1UEBxMNU2FuIEZyYW5jaXNjbzEQMA4GA1UEChMHSmFua3lDbzESMBAGA1UEAxMJbG9jYWxob3N0MB4XDTE0MDMxMjE5NDYzM1oXDTI3MTExOTE5NDYzM1owYDELMAkGA1UEBhMCVVMxEzARBgNVBAgTCkNhbGlmb3JuaWExFjAUBgNVBAcTDVNhbiBGcmFuY2lzY28xEDAOBgNVBAoTB0phbmt5Q28xEjAQBgNVBAMTCWxvY2FsaG9zdDCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBAMGvJpRTTasRUSPqcbqCG+ZnTAurnu0vVpIG9lzExnh11o/BGmzu7lB+yLHcEdwrKBBmpepDBPCYxpVajvuEhZdKFx/Fdy6j5mH3rrW0Bh/zd36CoUNjbbhHyTjeM7FN2yF3u9lcyubuvOzr3B3gX66IwJlU46+wzcQVhSOlMk2tXR+fIKQExFrOuK9tbX3JIBUqItpI+HnAow509CnM134svw8PTFLkR6/CcMqnDfDK1m993PyoC1Y+N4X9XkhSmEQoAlAHPI5LHrvuujM13nvtoVYvKYoj7ScgumkpWNEvX652LfXOnKYlkB8ZybuxmFfIkzedQrbJsyOhfL03cMECAwEAATANBgkqhkiG9w0BAQUFAAOCAQEAeHwzqwnzGEkxjzSD47imXaTqtYyETZow7XwBc0ZaFS50qRFJUgKTAmKS1xQBP/qHpStsROT35DUxJAE6NY1Kbq3ZbCuhGoSlY0L7VzVT5tpu4EY8+Dq/u2EjRmmhoL7UkskvIZ2n1DdERtd+YUMTeqYl9co43csZwDno/IKomeN5qaPc39IZjikJ+nUC6kPFKeu/3j9rgHNlRtocI6S1FdtFz9OZMQlpr0JbUt2T3xS/YoQJn6coDmJL5GTiiKM6cOe+Ur1VwzS1JEDbSS2TWWhzq8ojLdrotYLGd9JOsoQhElmz+tMfCFQUFLExinPAyy7YHlSiVX13QH2XTu/iQQ==">>,
    Assertion = #esaml_assertion{recipient = "foo",
                                 issuer = "bomb.com",
                                 subject = #esaml_subject{name = UserName},
                                 attributes = [{email,"saml@saml.io"},{lastName,"Jackson"},{firstName,"Saml"}]},
    Relay = [],
    application:set_env(delivery, api_proto, "https"),
    application:set_env(delivery, hostname, "delivery.com"),
    {ok, ServiceProvider} = auth_saml_config:service_provider(EntName, Cert),
    ConfigRecord = #saml_config{ent_name = EntName,
                                sso_login_url = SSOLoginUrl,
                                sso_binding = SSOBinding,
                                idp_url = IdpUrl,
                                cert = Cert,
                                name_id = NameId},
    auth_saml_config:upsert(ConfigRecord),
    ConsumeUri = <<"https://delivery.com/api/v0/e/cd/saml/consume">>,

    hoax:mock(auth_saml_cowboy, [
              ?expect(extract_saml_params,
                      ?withArgs([req1]),
                      ?andReturn({saml_encoding, saml_response, Relay, req2})),
              ?expect(validate_assertion,
                      ?withArgs([ServiceProvider, saml_encoding, saml_response]),
                      ?andReturn({ok, Assertion}))]),
    hoax:mock(deliv_token,
              ?expect(assign_token,
                      ?withArgs([EntName, UserNameBin]),
                      ?andReturn({ok, token}))),
    hoax:mock(deliv_web_utils, [
              ?expect(api_url_for,
                      ?withArgs([saml_consume, [EntName]]),
                      ?andReturn(ConsumeUri)),
             ?expect(extract_bindings,
                     ?withArgs([[ent_name], req]),
                     ?andReturn({[EntName], req1})),
              ?expect(make_web_url_for_login,
                      ?withArgs([EntName]),
                      ?andReturn(location)),
              ?expect(protocol,
                      ?withArgs([]),
                      ?andReturn("https")),
              ?expect(set_cookie,
                      ?withArgs([<<"saml-chef-delivery-token">>, token, true, req2]),
                      ?andReturn({ok, req3})),
              ?expect(set_cookie,
                      ?withArgs([<<"saml-chef-delivery-user">>, UserNameBin, true, req3]),
                      ?andReturn({ok, req4})),
              ?expect(set_cookie,
                      ?withArgs([<<"saml-chef-delivery-ttl">>, list_to_binary(integer_to_list(TTL)), true, req4]),
                      ?andReturn({ok, req5})),
              ?expect(redirect_302,
                      ?withArgs([location, req5, State]),
                      ?andReturn({ok, req6, State}))]),

    Actual = auth_hand_saml_consume:handle(req, State),
    {ok, FetchedUser} = deliv_user:fetch(EntName, UserNameBin),
    FetchedUserName = deliv_user:getval(name, FetchedUser),
    MVPDefaultRoles = <<"observer">>,
    ?assertEqual({[{MVPDefaultRoles,[<<"enterprise">>]}]}, deliv_user:scoped_roles(enterprise, [EntName, FetchedUserName])),
    ?assertEqual({ok, req6, State}, Actual),
    ?verifyAll.
