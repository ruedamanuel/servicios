/**
 * # Directives Index
 *
 * Loads all the necessary directives for the application to run properly.
 */

"use strict";

module.exports = (function(){
  var angular = window.angular;
  angular.module("sDirectives", ["sFactories", "ui.select"])
    .directive("sServiceSearch", require("./sServiceSearch"));
})();
