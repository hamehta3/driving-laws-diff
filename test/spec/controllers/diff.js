'use strict';

describe('Controller: DiffCtrl', function () {

  // load the controller's module
  beforeEach(module('drivingLawsDiffApp'));

  var DiffCtrl, scope;

  var massLaws = {
                    name: "Seat Belts",
                    description:
                      [
                        {
                        detail: "Seat belts are required for the driver and all passengers age 13 and older."
                        },
                        {
                        detail: "Violation of the seat belt law is a secondary offense."
                        },
                        {
                        detail: "Riding in the cargo area of a pickup truck is not permitted for persons under age 12 if the vehicle is being driven less than 5 miles and less than 5 mph; some other exceptions apply."
                        }
                      ]
                    };

    var nvlaws = {
                  name: "Seat Belts",
                  description:
                    [
                      {
                      detail: "Seat belts are required for the driver and all passengers age 6 and older and weighing more than 60 lbs."
                      },
                      {
                      detail: "Violation of the seat belt law is a secondary offense."
                      },
                      {
                      detail: "Riding in the cargo area of a pickup truck is not permitted for persons under age 18 unless in farming or parade operations; other exceptions apply."
                      }
                    ]
                  };

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DiffCtrl = $controller('DiffCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should diff by lines by default', function () {
    expect(DiffCtrl.isWordDiff).toBeFalsy();
  });
});
