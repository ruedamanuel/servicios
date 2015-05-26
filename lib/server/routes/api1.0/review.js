/**
 * # Review Routes
 */

"use strict";

var review = require("../../services/review"),
  log = require("../../utils/logger");

module.exports = {
  getByProvider: function(req, res){
    if (req.query.hasOwnProperty("id")){
      log.info(req.query);
      review.getByProvider(req)
        .then(function(results){
          res.status(200).send(results);
        })
        .catch(function(error){
          res.status(500).send(error);
        });
    }else{
      res.status(400).body(new Error("No provider id was provided"));
    }
  }
};
