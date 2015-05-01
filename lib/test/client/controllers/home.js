/**
 * # Home controller test
 */

"use strict";

module.exports = (function(){

  var expect = require("chai").expect,
    mock = require("../helper");

  var $scope, ctrl;
  describe("Home Controller", function(){

    beforeEach(function(){

      mock.module("app");

      mock.inject(function($rootScope, $controller){
        $scope = $rootScope.$new();
        ctrl = $controller(require("../../../client/scripts/controllers/home.js"), {
            $scope: $scope
          });
      });

    });

    it("Should return the initial value plus 1", function(){
      expect($scope.sampleFunction(1)).to.equal(2);
    });
    it("Welcome should match given string", function(){
      expect($scope.welcome).to.equal("Welcome home");
    });

  });
})();
