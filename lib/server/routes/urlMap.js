/**
 * # URL Map
 */

"use strict";

var log = require("../utils/logger"),
  color = require("cli-color");

module.exports = function(app){
  //General log filter
  app.all("*", function(req, res, next){
    log.info(color.yellow(req.method) + " - " +
    color.cyan(req.path) + " - " +
    color.blackBright(new Date().toString()));
    next();
  });

  //Root
  app.get("/", require("./home").get);

  //Debugging route
  app.get("/develop/debug", require("./landing").get);
};