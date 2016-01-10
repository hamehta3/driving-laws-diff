'use strict';

/**
 * @ngdoc overview
 * @name drivingLawsDiffApp
 * @description
 * # drivingLawsDiffApp
 *
 * Main module of the application.
 */
angular
  .module('drivingLawsDiffApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'app.config',
    'config-constants',
    'ui.bootstrap',
    'ui.select',
    'uiSwitch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/diff.html',
        controller: 'DiffCtrl',
        controllerAs: 'diffCtrl'
      })
      .when('/states', {
        templateUrl: 'views/states.html',
        controller: 'StatesCtrl',
        controllerAs: 'statesCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
