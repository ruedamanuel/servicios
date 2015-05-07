/**
 * # Profession API Routes 1.0
 */

"use strict";

var profession = require("../../services/profession")
  //log = require("../../utils/logger")
  ;

module.exports = {
  get: function(req, res){
    profession.search(req)
      .then(function(result){
        res.status(200).send(result);
      })
      .catch(function(error){
        res.status(500).send(error);
      });
  }
};
