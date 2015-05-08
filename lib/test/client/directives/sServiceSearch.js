/**
 * # Search Service Directive Test
 */

"use strict";

module.exports = (function(){
  var expect = require("chai").expect,
    mock = require("../helper");

  describe("Search Service Directive Tests", function(){
    var scope, elem, element, compile;
    beforeEach(function(){

      mock.module("sFactories");
      mock.module("sDirectives");
      mock.module(function($provide){
        $provide.value("Profession", {
            search: function(){
              return [];
            }
          }
        );
      });//
      mock.inject(function($rootScope, $compile){
        scope = $rootScope.$new();
        compile = $compile;
        elem = "<section s-service-search></section>";
        element = compile(elem)(scope);
        scope.$digest();
      });
    });
    describe("Basic setup", function(){
      it("Directive Element should exist", function(){
        expect(element).to.be.an("object");
      });
      describe("Methods", function(){
        it("Should have an enable function", function(){
          expect(element.scope()).to.have.property("enable");
        });
        it("Should have a disable function", function(){
          expect(element.scope()).to.have.property("disable");
        });
        it("Should have a clear function", function(){
          expect(element.scope()).to.have.property("clear");
        });
        it("Should have a refreshResults function", function(){
          expect(element.scope()).to.have.property("refreshResults");
        });
        it("Should have a selectedOption function", function(){
          expect(element.scope()).to.have.property("selectedOption");
        });
      });
    });


  });
})();
