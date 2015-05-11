/**
 * # Service Provider Routes
 */

"use strict";

var log = require("../../utils/logger"),
  provider = require("../../services/provider");

module.exports = {
  getByProfession: function(req, res){
    if (req.params.hasOwnProperty("profession")){
      log.info(req.params);
      provider.getByProfession(req)
        .then(function(results){
          res.status(200).send(results);
        })
        .catch(function(error){
          res.status(500).send(error);
        });
    }else{
      res.status(400).body(new Error("No profession was provided"));
    }
  }
};
