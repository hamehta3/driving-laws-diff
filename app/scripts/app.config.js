angular.module('app.config', []);

angular.module('app.config').factory('apiUrl', function(ENV) {
  // API Config
  var protocol = ENV.API_PROTOCOL;
  var host = ENV.API_HOST;
  var port = ENV.API_PORT;
  var fullApiUrl = function() {
    return protocol+"://"+host+":"+port+"/";
  };
  return fullApiUrl();
})
