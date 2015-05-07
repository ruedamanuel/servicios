/**
 * # Formatter Utility Test
 */

"use strict";

module.exports = (function(){
  var expect = require("chai").expect,
    format = require("../../../server/utils/formatter");
  //
  describe("Formatter Tests", function(){
    it("Should transform underscored strings to camelCased strings", function(){
      expect(format.underscoreToCamelCase("some_string_value")).to.equal("someStringValue");
    });
    it("Should transform camelCased strings to underscored strings", function(){
      expect(format.camelCaseToUnderscore("someStringValue")).to.equal("some_string_value");
    });
    it("Should transform field groups from underscore to camelCase", function(){
      var someObj = {"key_one": null, "key_two": null};
      expect(format.camelCaseFields(someObj)).to.have.property("keyOne", null);
      expect(format.camelCaseFields(someObj)).to.have.property("keyTwo", null);
    });
    it("Should transform field groups from camelCase to underscore", function(){
      var someObj = {"keyOne": null, "keyTwo": null};
      expect(format.underscoreFields(someObj)).to.have.property("key_one", null);
      expect(format.underscoreFields(someObj)).to.have.property("key_two", null);
    });
  });
})();
