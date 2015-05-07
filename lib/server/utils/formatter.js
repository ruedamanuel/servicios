/**
 * # Formatter Utility
 *
 * Helper for switching strings between underscore separators
 * and camel case.
 */

"use strict";

var _ = require("lodash");
/**
 * Capitalizes the first letter of a string.
 *
 * @method capitaliseFirstLetter
 * @private
 *
 * @param {String} string
 *
 */
function capitaliseFirstLetter(string){
  return string.charAt(0).toUpperCase() + string.slice(1);
}

/**
 * Adds underscores to a camelCased string.
 *
 * @method addUnderscores
 * @private
 *
 * @param {String} name
 * @param {Array} indexes
 *
 */
function addUnderscores(name, indexes){
  var underscored = "";
  if (indexes.length){
    underscored = (name.substr(indexes[indexes.length-1], name.length)).toLowerCase();
    for (var j = indexes.length-1; j > 0; j -= 1){
      var temp = name.substr(indexes[j-1], (indexes[j] - indexes[j-1]));
      underscored = temp.toLowerCase() + "_" + underscored;
    }
    underscored = (name.substr(0, indexes[0])).toLowerCase() + "_" + underscored;
    return underscored;
  }else{
    return name;
  }
}

var camelCase = {
  /**
   * Transforms an underscored string into a camelCased string.
   *
   * @method underscoreToCamelCase
   * @public
   *
   * @param {String} name
   *
   */
  underscoreToCamelCase: function(name){
    //console.log("received: ", name);
    var subStringArray = name.split("_"),
      camelCasedName = "";
    if (subStringArray.length){
      for (var i = 1; i < subStringArray.length; i += 1){
        subStringArray[i] = capitaliseFirstLetter(subStringArray[i]);
      }
      camelCasedName = subStringArray.join("");
      //console.log(camelCasedName);
      return camelCasedName;
    }else{
      return name;
    }
  },
  /**
   * Transforms a camelCased string into an underscored string.
   *
   * @method camelCaseToUnderscore
   * @public
   *
   * @param {String} name
   *
   */
  camelCaseToUnderscore: function(name){
    var indexes = [];

    //console.log("received cc: ", name);
    for (var i = 0; i < name.length; i += 1){
      if (name[i] === name[i].toUpperCase()){
        indexes[indexes.length] = i;
      }
    }
    return addUnderscores(name, indexes);
  },
  /**
   * Transforms the keys of an Object from underscored strings into camelCased strings.
   *
   * @method camelCaseFields
   * @public
   *
   * @param {Object} model
   *
   */
  camelCaseFields: function(model){
    var newModel = {};
    for (var key in model){
      if (model.hasOwnProperty(key)){
        //camelCasedCriteria[camelCaseUtil.camelCaseToUnderscore(criterion)] = criteria[criterion];
        newModel[this.underscoreToCamelCase(key)] = model[key];
      }
    }
    return newModel;
  },
  /**
   * Transforms the keys of an Object from camelCased strings into underscored strings.
   *
   * @method underscoreFields
   * @public
   *
   * @param {Object} model
   *
   */
  underscoreFields: function(model){
    var newModel = {};
    for (var key in model){
      if (model.hasOwnProperty(key)){
        newModel[this.camelCaseToUnderscore(key)] = model[key];
      }
    }
    return newModel;
  },
  /**
   * Camel cases all the keys in an array of objects.
   *
   * @method camelCaseArray
   * @public
   *
   * @param {Array}  collection   Must contain javascript objects.
   * @returns {Array}
   */
  camelCaseArray: function(collection){
    var tempCollection = [],
      _this = this;
    _.each(collection, function(item){
      tempCollection[tempCollection.length] = _this.camelCaseFields(item);
    });
    return tempCollection;
  },
  /**
   * Underscores all the keys in an array of objects.
   *
   * @method underscoreArray
   * @public
   *
   * @param {Array} collection
   * @returns {Array}
   */
  underscoreArray: function(collection){
    var tempCollection = [],
      _this = this;
    _.each(collection, function(item){
      tempCollection[tempCollection.length] = _this.underscoreFields(item);
    });
    return tempCollection;
  }
};

module.exports = camelCase;
