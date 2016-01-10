angular.module('app.config', []);

angular.module('app.config').factory('apiUrl', function($location) {
  // API Config
  var protocol = process.env.API_PROTOCOL || $location.protocol();
  var host = process.env.API_HOST || $location.host();
  var port = process.env.API_PORT || $location.port();
  var fullApiUrl = function() {
    return protocol+"://"+host+":"+port+"/";
  };
  return fullApiUrl();
})
