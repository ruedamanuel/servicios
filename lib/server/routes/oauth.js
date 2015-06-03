/**
 * # OAuth Routes
 */

"use strict";

var oauth = {
    facebook: require("../services/facebook")
  };

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
    if (oauth.hasOwnProperty(req.params.oauthProvider)){
      req.session.oauth = {
        provider: req.params.oauthProvider
      };
      res.redirect(oauth[req.params.oauthProvider].getLoginUrl());
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
        oauth[req.params.oauthProvider].getAccessToken(req)
          .then(function(data){
            req.session.oauth[req.session.oauth.provider] = data;
            return oauth[req.session.oauth.provider].getUser(req);
          })
          .then(function(user){
            req.session.oauth[req.session.oauth.provider].user = user;
            res.status(200).send(req.session.oauth[req.session.oauth.provider]);
          })
          .catch(function(e){
            res.status(500).send(e);
          });
      }else{
        res.status(404).send(new Error("Provider not found"));
      }
    }
  }
};
