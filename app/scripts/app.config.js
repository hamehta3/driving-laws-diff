angular.module('app.config', []);

angular.module('app.config').factory('apiUrl', function($location) {
  // API Config
  var protocol = $location.protocol();
  var host = $location.host();
  var port = '5000'; //$location.port();
  var fullApiUrl = function() {
    return protocol+"://"+host+":"+port+"/";
  };
  return fullApiUrl();
})