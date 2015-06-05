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

  //OAuth Routes
  app.get("/oauth/:oauthProvider/login", require("./oauth").login);
  app.get("/oauth/:oauthProvider/redirect", require("./oauth").redirect);

  //API routes
  app.get(apiPath + "/profession", require("./api1.0/profession").get);

  app.get(apiPath + "/providers/:profession", require("./api1.0/providers").getByProfession);
  app.get(apiPath + "/providers/get/:alias", require("./api1.0/providers").getByAlias);

  app.get(apiPath + "/review/provider", require("./api1.0/review").getByProvider);

  //TESTING ROUTE
  app.post(apiPath + "/register", require("./api1.0/register").registerUser);

  //Root
  app.get("/", require("./home").get);

  //Debugging route
  app.get("/develop/debug", require("./landing").get);
};