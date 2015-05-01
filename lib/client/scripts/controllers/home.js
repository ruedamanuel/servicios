/**
 * # Home Controller
 */

"use strict";

module.exports = function($scope){
  $scope.welcome = "Welcome home";
  $scope.sampleFunction = function(val){
    return val + 1;
  };
};
