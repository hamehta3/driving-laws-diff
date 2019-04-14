'use strict';

/**
 * @ngdoc service
 * @name drivingLawsDiffApp.stateService
 * @description
 * # stateService
 * Factory in the drivingLawsDiffApp.
 */
angular.module('drivingLawsDiffApp')
  .factory('stateService', function ($http, $log, apiUrl) {

    function getStates() {
      return $http.get(apiUrl+'states')
        .then(processResponse)
        .catch(processError);
    }

    function getState(stateName) {
      return $http.get(apiUrl+'states/'+stateName)
        .then(processResponse)
        .catch(processError);
    }

    function getStateLaws(stateName) {
      return $http.get(apiUrl+'states/'+stateName+'/laws')
        .then(processResponse)
        .catch(processError);
    }

    function getStateLaw(stateName, categoryName, lawName) {
      return $http.get(apiUrl+'states/'+stateName+'/categories/'+categoryName+'/laws/'+lawName)
        .then(processResponse)
        .catch(processError);
    }

    function getStateLawCategories(stateName) {
      return $http.get(apiUrl+'states/'+stateName+'/categories')
        .then(processResponse)
        .catch(processError);
    }

    function getStateLawCategory(stateName, categoryName) {
      return $http.get(apiUrl+'states/'+stateName+'/categories/'+categoryName)
        .then(processResponse)
        .catch(processError);
    }

    function processResponse(response) {
      //$log.info("Successfully returned response");
      //$log.log(response);
      return response.data;
    }

    function processError(error) {
      // Log error
      $log.error('Server error while trying to fetch data');
      return [];
    }

    return {
      getStates: getStates,
      getState: getState,
      getStateLaws: getStateLaws,
      getStateLaw: getStateLaw,
      getStateLawCategories: getStateLawCategories,
      getStateLawCategory: getStateLawCategory
    };
});
