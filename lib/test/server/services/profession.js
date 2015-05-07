/**
 * # Profession Service Test
 */

"use strict";

module.exports = (function(){
  var expect = require("chai").expect,
    profession = require("../../../server/services/profession");

  describe("Profession Service Tests", function(){
    it("Should have search method", function(){
      expect(profession.hasOwnProperty("search")).to.equal(true);
    });
  });
})();
