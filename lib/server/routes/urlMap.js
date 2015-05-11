/**
 * # URL Map
 */

"use strict";

var log = require("../utils/logger"),
  color = require("cli-color"),
  apiPath = global.config.api.path + "/" + global.config.api.version;

module.exports = function(app){
  //General log filter
  app.all("*", function(req, res, next){
    log.info(color.yellow(req.method) + " - " +
    color.cyan(req.path) + " - " +
    color.blackBright(new Date().toString()));
    next();
  });

  //Force JSON format to be default for all API routes
  app.all(global.config.api.path + "/*", function(req, res, next){
    res.type("json");
    next();
  });

  //API routes
  app.get(apiPath + "/profession", require("./api1.0/profession").get);

  app.get(apiPath + "/providers/:profession", require("./api1.0/providers").getByProfession);

  //Root
  app.get("/", require("./home").get);

  //Debugging route
  app.get("/develop/debug", require("./landing").get);
};