/**
 * # Filters Index
 */

"use strict";

module.exports = (function(){
  var angular = window.angular;
  angular.module("sFilters", [])
    .filter("propsFilter", require("./propsFilter"));
})();
