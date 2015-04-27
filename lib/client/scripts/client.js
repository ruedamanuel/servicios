/**
 * # Client JS Index
 *
 * This module includes the app and main controller setup for the
 * client scripts.
 */


"use strict";

var angular = window.angular;
console.log("Angular: ", angular);

var app = angular.module("app", []);

app.controller("MainCtrl", function($scope){
  console.log("Loaded main controller");
  $scope.test = "Passing data";
});

