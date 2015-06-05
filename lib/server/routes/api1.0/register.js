/**
 * # Registration Routes
 */

"use strict";

var register = require("../../services/registration"),
  log = require("../../utils/logger");

module.exports = {
  registerUser: function(req, res){
    log.info(req.body);
    register.register(req)
      .then(function(user){
        log.info(user);
        res.status(201).send(user);
      })
      .catch(function(error){
        log.error(error.message);
        res.status(500).send(error.message);
      });
  }
};
