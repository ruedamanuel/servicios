/**
 * # Provider Service Test
 */

"use strict";

module.exports = (function(){
  var expect = require("chai").expect,
    profession = require("../../../server/services/provider");

  describe("Provider Service Tests", function(){
    it("Should have getByProfession method", function(){
      expect(profession).to.have.property("getByProfession");
    });
  });
})();
