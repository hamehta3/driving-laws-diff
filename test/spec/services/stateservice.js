'use strict';

describe('Service: stateService', function () {

  // load the service's module
  beforeEach(module('drivingLawsDiffApp'));

  // instantiate service
  var stateService;
  beforeEach(inject(function (_stateService_) {
    stateService = _stateService_;
  }));

  it('should do something', function () {
    expect(!!stateService).toBe(true);
  });

});
