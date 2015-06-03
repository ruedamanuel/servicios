/**
 * # Request Util
 *
 * Https wrapper for server to server requests.
 */

"use strict";

var q = require("q"),
  bufferUtil = require("./buffer"),
  https = require("https");

module.exports = function(options, body){
  return q.Promise(function(resolve, reject){
    var request = https.request(options, function(res){
      bufferUtil.asJSON(res, function(error, data){
        if(error){
          reject(error);
        }else{
          resolve(data);
        }
      });
    });
    request.on("error", function(e){
      reject(new Error(e.message));
    });
    request.write(!!body ? body : null);
    request.end();
  });
};
