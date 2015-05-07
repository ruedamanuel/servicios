/**
 * # MySQL Service Test
 */

"use strict";

module.exports = (function(){
  var expect = require("chai").expect,
    mysql = require("../../../server/services/mysql");

  describe("MySQL Service Tests", function(){
    it("Should have init and query methods", function(){
      expect(mysql.hasOwnProperty("init")).to.equal(true);
      expect(mysql.hasOwnProperty("query")).to.equal(true);
    });
  });
})();
