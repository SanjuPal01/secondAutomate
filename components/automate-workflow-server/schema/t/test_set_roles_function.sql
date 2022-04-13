CREATE OR REPLACE FUNCTION test_set_roles_function()
RETURNS SETOF TEXT
LANGUAGE plpgsql
AS $$
DECLARE
  test_enterprise CONSTANT enterprises.name%TYPE = 'BigCo';
  test_user CONSTANT users.name%TYPE  = 'BigCo User';
  test_organization CONSTANT organizations.name%TYPE = 'BigCo Engineering';
  test_project CONSTANT projects.name%TYPE = 'skunkworks';
  test_pipeline CONSTANT pipelines.name%TYPE = 'master';

  test_enterprise_id CONSTANT enterprises.id%TYPE = ent(test_enterprise);
  test_user_id CONSTANT users.id%TYPE = u(test_enterprise, test_user);
  test_organization_id CONSTANT organizations.id%TYPE = org(test_enterprise, test_organization);
  test_project_id CONSTANT projects.id%TYPE = proj(test_enterprise, test_organization, test_project);
  test_pipeline_id CONSTANT pipelines.id%TYPE = pipe(test_enterprise, test_organization, test_project, test_pipeline);

BEGIN

  -- Enterprise roles grants!

  PREPARE enterprise_roles(bigint, bigint) AS
  SELECT role FROM enterprise_user_roles
  WHERE enterprise_id = $1
    AND user_id = $2
  ORDER BY role;

  RETURN QUERY SELECT results_eq(
    format('EXECUTE enterprise_roles(%L, %L)', test_enterprise_id, test_user_id),
    ARRAY[]::delivery_role[],
    'No roles yet'
  );

  RETURN QUERY SELECT lives_ok(
    format('SELECT set_roles(%L, %L, NULL, NULL, NULL, %L)', test_enterprise, test_user, ARRAY['admin']),
    'Set "admin" at the enterprise scope'
  );

  RETURN QUERY SELECT results_eq(
    format('EXECUTE enterprise_roles(%L, %L)', test_enterprise_id, test_user_id),
    ARRAY['admin']::delivery_role[],
    'The user has the "admin" role at the enterprise scope now!'
  );

  RETURN QUERY SELECT lives_ok(
    format('SELECT set_roles(%L, %L, NULL, NULL, NULL, %L)', test_enterprise, test_user, ARRAY['admin']),
    'Set "admin" at the enterprise scope again with no ill effects'
  );

  RETURN QUERY SELECT results_eq(
    format('EXECUTE enterprise_roles(%L, %L)', test_enterprise_id, test_user_id),
    ARRAY['admin']::delivery_role[],
    'The user still only has the "admin" role at the enterprise scope'
  );

  RETURN QUERY SELECT lives_ok(
    format('SELECT set_roles(%L, %L, NULL, NULL, NULL, %L)', test_enterprise, test_user, ARRAY['committer', 'reviewer']),
    'Set different roles at the enterprise scope'
  );

  RETURN QUERY SELECT results_eq(
    format('EXECUTE enterprise_roles(%L, %L)', test_enterprise_id, test_user_id),
    ARRAY['committer', 'reviewer']::delivery_role[],
    'The user has only the set roles at the enterprise scope'
  );

  RETURN QUERY SELECT results_eq(
    format('SELECT * FROM set_roles(%L, %L, NULL, NULL, NULL, %L)', test_enterprise, test_user, ARRAY['committer', 'reviewer']),
    format('SELECT * FROM scoped_roles(%L, %L, NULL, NULL, NULL)', test_enterprise, test_user),
    'Returns scoped role information'
  );

  -- Organization roles grants!

  PREPARE organization_roles(bigint, bigint) AS
  SELECT role FROM organization_user_roles
  WHERE organization_id = $1
    AND user_id = $2
  ORDER BY role;

  RETURN QUERY SELECT results_eq(
    format('EXECUTE organization_roles(%L, %L)', test_organization_id, test_user_id),
    ARRAY[]::delivery_role[],
    'No roles yet'
  );

  RETURN QUERY SELECT lives_ok(
    format('SELECT set_roles(%L, %L, %L, NULL, NULL, %L)', test_enterprise, test_user, test_organization, ARRAY['admin']),
    'Set "admin" at the organization scope'
  );

  RETURN QUERY SELECT results_eq(
    format('EXECUTE organization_roles(%L, %L)', test_organization_id, test_user_id),
    ARRAY['admin']::delivery_role[],
    'The user has the "admin" role at the organization scope now!'
  );

  RETURN QUERY SELECT lives_ok(
    format('SELECT set_roles(%L, %L, %L, NULL, NULL, %L)', test_enterprise, test_user, test_organization, ARRAY['admin']),
    'Set "admin" at the organization scope again with no ill effects'
  );

  RETURN QUERY SELECT results_eq(
    format('EXECUTE organization_roles(%L, %L)', test_organization_id, test_user_id),
    ARRAY['admin']::delivery_role[],
    'The user still only has the "admin" role at the organization scope'
  );

  RETURN QUERY SELECT lives_ok(
    format('SELECT set_roles(%L, %L, %L, NULL, NULL, %L)', test_enterprise, test_user, test_organization, ARRAY['committer', 'reviewer']),
    'Set different roles at the organization scope'
  );

  RETURN QUERY SELECT results_eq(
    format('EXECUTE organization_roles(%L, %L)', test_organization_id, test_user_id),
    ARRAY['committer', 'reviewer']::delivery_role[],
    'The user has only the set roles at the organization scope'
  );

  RETURN QUERY SELECT results_eq(
    format('SELECT * FROM set_roles(%L, %L, %L, NULL, NULL, %L)', test_enterprise, test_user, test_organization, ARRAY['committer', 'reviewer']),
    format('SELECT * FROM scoped_roles(%L, %L, %L, NULL, NULL)', test_enterprise, test_user, test_organization),
    'Returns scoped role information'
  );

  -- Project roles grants!

  PREPARE project_roles(bigint, bigint) AS
  SELECT role FROM project_user_roles
  WHERE project_id = $1
    AND user_id = $2
  ORDER BY role;

  RETURN QUERY SELECT results_eq(
    format('EXECUTE project_roles(%L, %L)', test_project_id, test_user_id),
    ARRAY[]::delivery_role[],
    'No roles yet'
  );

  RETURN QUERY SELECT lives_ok(
    format('SELECT set_roles(%L, %L, %L, %L, NULL, %L)', test_enterprise, test_user, test_organization, test_project, ARRAY['admin']),
    'Set "admin" at the project scope'
  );

  RETURN QUERY SELECT results_eq(
    format('EXECUTE project_roles(%L, %L)', test_project_id, test_user_id),
    ARRAY['admin']::delivery_role[],
    'The user has the "admin" role at the project scope now!'
  );

  RETURN QUERY SELECT lives_ok(
    format('SELECT set_roles(%L, %L, %L, %L, NULL, %L)', test_enterprise, test_user, test_organization, test_project, ARRAY['admin']),
    'Set "admin" at the project scope again with no ill effects'
  );

  RETURN QUERY SELECT results_eq(
    format('EXECUTE project_roles(%L, %L)', test_project_id, test_user_id),
    ARRAY['admin']::delivery_role[],
    'The user still only has the "admin" role at the project scope'
  );

  RETURN QUERY SELECT lives_ok(
    format('SELECT set_roles(%L, %L, %L, %L, NULL, %L)', test_enterprise, test_user, test_organization, test_project, ARRAY['committer', 'reviewer']),
    'Set different roles at the project scope'
  );

  RETURN QUERY SELECT results_eq(
    format('EXECUTE project_roles(%L, %L)', test_project_id, test_user_id),
    ARRAY['committer', 'reviewer']::delivery_role[],
    'The user has only the set roles at the project scope'
  );

  RETURN QUERY SELECT results_eq(
    format('SELECT * FROM set_roles(%L, %L, %L, %L, NULL, %L)', test_enterprise, test_user, test_organization, test_project, ARRAY['committer', 'reviewer']),
    format('SELECT * FROM scoped_roles(%L, %L, %L, %L, NULL)', test_enterprise, test_user, test_organization, test_project),
    'Returns scoped role information'
  );

  -- Pipeline roles grants!

  PREPARE pipeline_roles(bigint, bigint) AS
  SELECT role FROM pipeline_user_roles
  WHERE pipeline_id = $1
    AND user_id = $2
  ORDER BY role;

  RETURN QUERY SELECT results_eq(
    format('EXECUTE pipeline_roles(%L, %L)', test_pipeline_id, test_user_id),
    ARRAY[]::delivery_role[],
    'No roles yet'
  );

  RETURN QUERY SELECT lives_ok(
    format('SELECT set_roles(%L, %L, %L, %L, %L, %L)', test_enterprise, test_user, test_organization, test_project, test_pipeline, ARRAY['admin']),
    'Set "admin" at the pipeline scope'
  );

  RETURN QUERY SELECT results_eq(
    format('EXECUTE pipeline_roles(%L, %L)', test_pipeline_id, test_user_id),
    ARRAY['admin']::delivery_role[],
    'The user has the "admin" role at the pipeline scope now!'
  );

  RETURN QUERY SELECT lives_ok(
    format('SELECT set_roles(%L, %L, %L, %L, %L, %L)', test_enterprise, test_user, test_organization, test_project, test_pipeline, ARRAY['admin']),
    'Set "admin" at the pipeline scope again with no ill effects'
  );

  RETURN QUERY SELECT results_eq(
    format('EXECUTE pipeline_roles(%L, %L)', test_pipeline_id, test_user_id),
    ARRAY['admin']::delivery_role[],
    'The user still only has the "admin" role at the pipeline scope'
  );

  RETURN QUERY SELECT lives_ok(
    format('SELECT set_roles(%L, %L, %L, %L, %L, %L)', test_enterprise, test_user, test_organization, test_project, test_pipeline, ARRAY['committer', 'reviewer']),
    'Set different roles at the pipeline scope'
  );

  RETURN QUERY SELECT results_eq(
    format('EXECUTE pipeline_roles(%L, %L)', test_pipeline_id, test_user_id),
    ARRAY['committer', 'reviewer']::delivery_role[],
    'The user has only the set roles at the pipeline scope'
  );

  RETURN QUERY SELECT results_eq(
    format('SELECT * FROM set_roles(%L, %L, %L, %L, %L, %L)', test_enterprise, test_user, test_organization, test_project, test_pipeline, ARRAY['committer', 'reviewer']),
    format('SELECT * FROM scoped_roles(%L, %L, %L, %L, %L)', test_enterprise, test_user, test_organization, test_project, test_pipeline),
    'Returns scoped role information'
  );

  -- Last sanity check, to make sure we had all the right variables
  -- set above. If all that worked as expected, then we should see
  -- that we have those two roles granted at every scope when we're
  -- down at the pipeline level
  PREPARE all_permissions AS
    VALUES ('committer'::delivery_role, ARRAY['enterprise', 'organization', 'project', 'pipeline']),
           ('reviewer'::delivery_role, ARRAY['enterprise', 'organization', 'project', 'pipeline']);

  RETURN QUERY SELECT results_eq(
    format('SELECT * FROM scoped_roles(%L, %L, %L, %L, %L)', test_enterprise, test_user, test_organization, test_project, test_pipeline),
    'all_permissions',
    'We have all the roles we expect'
  );

END;
$$;
