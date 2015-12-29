'use strict';

describe('Controller: StatesCtrl', function () {

  // load the controller's module
  beforeEach(module('drivingLawsDiffApp'));

  var StatesCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    StatesCtrl = $controller('StatesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  
});
