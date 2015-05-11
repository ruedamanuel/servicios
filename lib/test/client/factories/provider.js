/**
 * # Provider Factory Test
 */

"use strict";

module.exports = (function(){

  var expect = require("chai").expect,
    mock = require("../helper"),
    Provider;

  describe("Provider Factory", function () {

    beforeEach(function(){
      mock.module("sFactories");
      mock.inject(function(_Provider_) {
        Provider = _Provider_;
      });
    });

    it("Should contain a getByProfession method", function() {
      expect(Provider).to.have.property("getByProfession");
      expect(Provider.getByProfession).to.be.a("function");
    });
  });
})();
