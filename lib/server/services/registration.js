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
  /**
   * Triggers all the functions necessary for user
   * registration
   *
   * @method Registration.register
   * @public
   *
   * @param {HttpRequest} req
   * @returns {*}
   */
  register: function(req){
    log.info("Received data: ", req.body);
    return q.Promise( function(resolve, reject) {
      user.findByEmail(req.body.email)
        .then( function(found) {
          if(found.length > 0){
            reject(new Error("Email already exists"));
          }else{
            return user.create(req);
          }
        })
        .then(function(result){
            if (!!result) {
              log.info(result);
            }
            resolve("User Created Successfully: " + req.body.email);
          })
        .catch(function(e){
          reject(e);
        });
    });
  }
};
