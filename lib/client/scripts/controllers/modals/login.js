/**
 * # Login Modal Controller
 */

"use strict";

module.exports = function($scope, $location, $window){
  $scope.test = "Loaded";
  $scope.oauthRedirect = function(provider){
    $window.location = "/oauth/" + provider + "/login?origin=" + encodeURIComponent("/#" + $location.url());
  };
};
