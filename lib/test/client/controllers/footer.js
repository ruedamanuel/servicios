/**
 * # Footer controller test
 */

"use strict";

module.exports = (function(){

  var expect = require("chai").expect,
    mock = require("../helper");

  var $scope, ctrl;
  describe("Footer Controller", function(){

    beforeEach(function(){

      mock.module("app");

      mock.inject(function($rootScope, $controller){
        $scope = $rootScope.$new();
        ctrl = $controller(require("../../../client/scripts/controllers/footer.js"), {
            $scope: $scope
          });
      });

    });

    it("Footer year should match current year", function(){
      expect($scope.copyrightYear).to.equal(new Date().getFullYear());
    });

  });
})();
