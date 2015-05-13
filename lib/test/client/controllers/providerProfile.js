/**
 * # Provider Profile controller test
 */

"use strict";

module.exports = (function(){

  var expect = require("chai").expect,
    mock = require("../helper");

  var $scope, ctrl;
  describe("Provider Profile Controller", function(){

    beforeEach(function(){

      mock.module("app");

      mock.inject(function($rootScope, $controller){
        $scope = $rootScope.$new();
        ctrl = $controller(require("../../../client/scripts/controllers/providerProfile.js"), {
          $scope: $scope
        });
      });

    });

    it("Should contain a profile object", function(){
      expect($scope).to.have.property("profile");
      expect($scope.profile).to.be.an("object");
    });

  });
})();
