/**
 * # Factories Index
 *
 * Loads all the necessary factories for the application.
 */

"use strict";

module.exports = (function(){
  var angular = window.angular;
  angular.module("sFactories", [])
    .factory("Profession", require("./profession"))
    .factory("Provider", require("./provider"))
    .factory("Modal", require("./modal"))
    .factory("Review", require("./review"));
})();
