'use strict';

// Declare app level module which depends on views, and components
angular.module('documentation_srf', [
  'ngRoute',
  'ngMaterial',
  'documentation_srf.templates'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $routeProvider.otherwise({redirectTo: '/templates'});
}]);
