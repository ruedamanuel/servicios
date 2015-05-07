/**
 * # Profession Factory Test
 */

"use strict";

module.exports = (function(){

  var expect = require("chai").expect,
    mock = require("../helper"),
    Profession;

  describe("Profession Factory", function () {

    beforeEach(function(){
      mock.module("sFactories");
      mock.inject(function(_Profession_) {
        Profession = _Profession_;
      });
    });

    it("Should contain a search method", function() {
      expect(!!Profession.search).to.equal(true);
      expect(Profession.search).to.be.a("function");
    });
  });
})();
