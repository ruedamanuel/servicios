/**
 * # OAuth Routes
 */

"use strict";

var oauth = {
    facebook: require("../services/facebook"),
    google: require("../services/google")
  },
  log = require("../utils/logger");

module.exports = {
  /**
   * Starts the login / signup process with a given OAuth service
   * provider.
   *
   * @method OAuth.login
   * @public
   *
   * @param {HttpRequest} req
   * @param {HttpResponse} res
   */
  login: function(req, res){
    log.info("Request Origin: ", !!req.query.origin ? req.query.origin : "not defined");
    req.session.origin = !!req.query.origin ? req.query.origin : "/#/home";

    if (!!req.session.oauth && !!req.session.oauth[req.params.oauthProvider]){
      oauth[req.session.oauth.provider].getUser(req)
        .then(function(){
          res.redirect(req.session.origin);
        })
        .catch(function(e){
          log.error("Problem with OAuth: ", e);
          req.session.oauth = {
            provider: req.params.oauthProvider
          };
          log.info(req.session.origin);
          //TODO: generate stronger state
          req.session.state = new Date().getTime();
          res.redirect(oauth[req.params.oauthProvider].getLoginUrl(req));
        });
    }else if (oauth.hasOwnProperty(req.params.oauthProvider)){
      req.session.oauth = {
        provider: req.params.oauthProvider
      };
      log.info(req.session.origin);
      //TODO: generate stronger state
      req.session.state = new Date().getTime();
      res.redirect(oauth[req.params.oauthProvider].getLoginUrl(req));
    }else{
      res.status(404).send(new Error("Provider not found"));
    }
  },
  /**
   * Handler for the redirect URI used by OAuth service providers.
   *
   * @method OAuth.redirect
   * @public
   *
   * @param {HttpRequest} req
   * @param {HttpResponse} res
   */
  redirect: function(req, res){
    if(req.query.hasOwnProperty("error")){
      res.status(401).send(new Error(req.query.error));
    }else{
      if (oauth.hasOwnProperty(req.params.oauthProvider)){
        if(req.query.hasOwnProperty("state") &&
          req.query.state === req.session.state.toString()){
          oauth[req.params.oauthProvider].getAccessToken(req)
            .then(function(data){
              req.session.oauth[req.session.oauth.provider] = data;
              return oauth[req.session.oauth.provider].getUser(req);
            })
            .then(function(user){
              req.session.oauth[req.session.oauth.provider].user = user;
              //res.status(200).send(req.session.oauth[req.session.oauth.provider]);
              res.redirect(req.session.origin);
            })
            .catch(function(e){
              res.status(500).send(e);
            });
        }else{
          log.warn("Cross Site Request Forgery attempted", new Date().toString());
          res.status(401).send(new Error("CSRF Attempt Identified"));
        }
      }else{
        res.status(404).send(new Error("Provider not found"));
      }
    }
  }
};
