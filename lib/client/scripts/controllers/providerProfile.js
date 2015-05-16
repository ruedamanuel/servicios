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
    address: "Carrera 5 # 75 - 11",
    city: "Bogota",
    country: "Colombia",
    icon: "icon-man.png",
    telephones: [
      {type: "Principal", number: 9173555538, ext: 123},
      {type: "Móvil", number: 3153555538}
    ],
    schedule: {
      openTime: "09:00:00",
      closeTime: "17:00:00"
    }
  };
};
