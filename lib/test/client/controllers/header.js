/**
 * # Header Test
 */

"use strict";

module.exports = (function(){

  var expect = require("chai").expect,
    mock = require("../helper");

  var $scope, ctrl;
  describe("Header Controller", function(){

    beforeEach(function(){

      mock.module("app");

      mock.inject(function($rootScope, $controller){
        $scope = $rootScope.$new();
        ctrl = $controller(require("../../../client/scripts/controllers/header.js"), {
            $scope: $scope
          });
      });

    });

    it("Header should load properly", function(){
      expect($scope.test).to.equal("Header Loaded");
    });

  });
})();
