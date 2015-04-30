/**
 * # Client JS Index
 *
 * This module includes the app and main controller setup for the
 * client scripts.
 */


"use strict";
require("./filters");
require("./directives");
var angular = window.angular;
console.log("Angular: ", angular);

/**
 * Create the main angular module
 */
var app = angular.module("app", ["ngSanitize", "ui.select", "ui.router", "sDirectives", "sFilters"]);

/**
 * Configure the ui router
 */
app.config(require("./router"));

app.controller("MainCtrl", function($scope, $state){
  console.log("Loaded main controller");
  $state.transitionTo("app.home");
});

