import ng from 'angular';
import uiRouter from 'angular-ui-router';
import navbarTemplate from './navbar.html';
import UserDropdown from '../user_dropdown/user_dropdown';
import 'angular-feature-flags/dist/featureFlags';

navbarComponent.$inject = ['$state', '$http', 'featureFlags'];

function navbarComponent($state, $http, featureFlags) {
  function link(scope) {
    scope.isOn = featureFlags.isOn;
    scope.isParentActive = (parent) => $state.includes(parent);
  }

  return {
    template: navbarTemplate,
    link: link
  };
}

export default ng
  .module('cd.components.navbar', [
    uiRouter,
    UserDropdown,
    'feature-flags'
  ])
  .directive('cdNavbar', navbarComponent)
  .name;
