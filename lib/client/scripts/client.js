/**
 * # Client JS Index
 *
 * This module includes the app and main controller setup for the
 * client scripts.
 */


"use strict";
require("./filters");
require("./factories");
require("./directives");
var angular = window.angular;

/**
 * Create the main angular module
 */
var app = angular.module("app", [
  "templates",
  "ngSanitize",
  "ui.select",
  "ui.router",
  "sDirectives",
  "sFilters",
  "sFactories"
]);

/**
 * Configure the ui router
 */
app.config(require("./router"));

app.run(function($http) {
  $http.defaults.headers.common["Content-Type"] = "application/json";
});

app.controller("MainCtrl", function($scope, $state){
  console.log("Loaded main controller");
  $state.transitionTo("app.home");
});

