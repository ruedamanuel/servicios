"use strict";

module.exports = (function(){

  var angular = window.angular;

  return {
    module: angular.mock.module,
    inject: angular.mock.inject,
    path: "../../client/scripts"
  };
  //stubs: require("./stubs")
})();
