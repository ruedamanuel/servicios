/**
 * # URL Map
 */

"use strict";

var log = require("../utils/logger");

module.exports = function(app){
  //General log filter
  app.all("*", function(req, res, next){
    log.info(req.method, req.path, new Date().toString());
    next();
  });

  //Root
  app.get("/", require("./home").get);

  //Debugging route
  app.get("/develop/debug", require("./landing").get);
};