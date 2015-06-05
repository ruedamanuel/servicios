/**
 * # Registration Service
 *
 * Handles creation of users and providers in
 * the platform.
 */

"use strict";

var user = require("./user"),
  q = require("q"),
  log = require("../utils/logger");

module.exports = {
  register: function(req){
    log.info("Received data: ", req.body);
    return q.Promise(function(resolve, reject){
      user.findByEmail(req.body.email)
        .then(function(user){
          if(user.length > 0){
            reject(new Error("Email already exists"));
          }else{
            resolve("Email available");
          }
        })
        .catch(function(e){
          reject(e);
        });
    });
  }
};
