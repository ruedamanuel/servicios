/**
 * # Provider Profile Controller
 *
 * Controls the actions of the public profile that a given
 * service provider puts together.
 */

"use strict";

module.exports = function($scope, $stateParams){
  console.log($stateParams);
  $scope.profile = {
    name: "Provider 1",
    address: "Some address"
  };
};
