/**
 * # Provider Card Directive Test
 */

"use strict";

module.exports = (function(){
  var expect = require("chai").expect,
    mock = require("../helper");

  describe("Provider Card Directive Tests", function(){
    var scope, elem, element, compile;
    beforeEach(function(){

      mock.module("sFactories");
      mock.module("sDirectives");
      mock.module(function($provide){
        $provide.value("$state", {
          transitionTo: function(){
            return 0;
          }
        });
      });//
      mock.inject(function($rootScope, $compile){
        scope = $rootScope.$new();
        scope.providerInfo = {
          "id": 7,
          "name": "Pedro Navajas",
          "serviceProviderTypeId": 2,
          "address": "Calle 71 # 1-90",
          "activityLevelId": 1,
          "dateCreated": "2015-05-11T19:42:58.000Z",
          "lastUpdated": "2015-05-11T20:16:03.000Z",
          "icon":"icon-man.png"
        };
        compile = $compile;
        elem = "<div s-provider-card provider-info='providerInfo'></div>";
        element = compile(elem)(scope);
        scope.$digest();
      });
    });
    describe("Basic setup", function(){
      it("Directive Element should exist", function(){
        expect(element).to.be.an("object");
      });
      describe("Methods", function(){
        it("Should have a providerInfo object", function(){
          expect(element.scope()).to.have.property("providerInfo");
        });
      });
    });


  });
})();

