/**
 * # Directives Index
 *
 * Loads all the necessary directives for the application to run properly.
 */

"use strict";

module.exports = (function(){
  var angular = window.angular;
  angular.module("sDirectives", ["sFactories", "ui.select"])
    .directive("sServiceSearch", require("./sServiceSearch"))
    .directive("sProviderCard", require("./sProviderCard"))
    .directive("sPullDown", require("./sPullDown"))
    .directive("sMap", require("./sMap"))
    .directive("sVotes", require("./sVotes"))
    .directive("sReview", require("./sReview"));
})();
