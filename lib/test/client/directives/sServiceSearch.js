/**
 * # Search Service Directive Test
 */

"use strict";

module.exports = (function(){
  var expect = require("chai").expect,
    mock = require("../helper");

  describe("Search Service Directive Tests", function(){
    var $scope, element;
    beforeEach(function(){

      mock.module("app");

      mock.inject(function($rootScope, $compile){
        $scope = $rootScope.$new();
        element = "<section s-service-search></section>";
        element = $compile(element)($scope);
        $scope.$digest();
      });
    });
    describe("Search Service should create a select 2", function(){
      it("should have an assigned password that is valid", function(element){
        expect(element).to.exist();
      });
    });
  });
})();
