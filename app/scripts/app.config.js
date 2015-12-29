angular.module('app.config', []);

angular.module('app.config').factory('apiUrl', function($location) {
  // API Config
  var protocol = 'https' //$location.protocol();
  var host = 'aaa-drivinglaws-api.herokuapp.com' // $location.host();
  var port = 443; // $location.port();
  var fullApiUrl = function() {
    return protocol+"://"+host+":"+port+"/";
  };
  return fullApiUrl();
})
