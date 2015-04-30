/**
 * # Directives Index
 *
 * Loads all the necessary directives for the application to run properly.
 */

"use strict";

module.exports = (function(){
  var angular = window.angular;
  angular.module("sDirectives", [])
    .directive("sServiceSearch", require("./sServiceSearch"));
})();
