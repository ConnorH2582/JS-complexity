'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', ['ngRoute']).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {

  $routeProvider.when('/', {
    templateUrl: 'mainView/view.html'
  });

  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/'});
}]);
