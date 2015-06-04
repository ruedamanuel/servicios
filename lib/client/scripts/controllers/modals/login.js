/**
 * # Login Modal Controller
 */

"use strict";

module.exports = function($scope){
  $scope.test = "Loaded";
  $scope.oauthRedirect = function(provider){
    console.log("provider", provider);
  };
};
