/**
 * # Buffer Utility
 *
 * Used to collect chunked responses from http
 * requests and return formatter responses.
 */

"use strict";
var _ = require("lodash"),
  format = require("./formatter");

module.exports = {
  /**
   * Retrieves the query parameters from a uri and
   * parses them as a json object.
   *
   * @method Buffer.parseUri
   * @public
   *
   * @param {String} uri
   * @returns {*}
   */
  parseUri: function(uri){
    var items = uri.split("&"),
      json = {};
    _.each(items, function(item){
      var temp = item.split("=");
      //console.log(temp);
      if (temp.length === 2){
        json[temp[0]] = temp[1];
      }
    });
    //console.log(json);
    return format.camelCaseFields(json);
  },
  /**
   * Transforms chunked data into a json object.
   *
   * @method Buffer.asJSON
   * @public
   *
   * @param {HttpResponse} response
   * @param {Function} callback
   */
  asJSON: function(response, callback){
    var data = [];
    response.on("data", function(chunk){
      data.push(chunk);
    });
    response.on("end", function(){
      var result = JSON.parse(data.toString());
      if (result.hasOwnProperty("error")){
        callback(result);
      }else{
        callback(null, format.camelCaseFields(result));
      }
    });
  }
};
