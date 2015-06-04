/**
 * # Google Service
 *
 * Used for all OAuth and API calls to google.
 */

"use strict";

var q = require("q"),
  request = require("../utils/request");

module.exports = {
  /**
   * Sends back the base url for starting the authentication
   * process with google.
   *
   * @method Google.getLoginUrl
   * @public
   *
   * @returns {String}
   */
  getLoginUrl: function(req){
    var path = [
      "https://accounts.google.com/o/oauth2/auth?",
      "response_type=code&",
      "client_id=" + global.config.oauth.google.apiKey + "&",
      "state=" + req.session.state + "&",
      "redirect_uri=" + global.config.oauth.google.redirectUri + "&",
      "scope=" + global.config.oauth.google.scope.join("%20")
    ];
    return path.join("");
  },
  /**
   * Retrieves a new access token provided by google.
   *
   * @method Google.getAccessToken
   * @public
   *
   * @param {HttpRequest} req
   * @returns {Promise}
   */
  getAccessToken: function(req){
    var options, body;
    return q.Promise(function(resolve, reject){
      if(req.query.hasOwnProperty("code")){
        //https://www.googleapis.com/oauth2/v3/token
        options = {
          hostname: "www.googleapis.com",
          path: "/oauth2/v3/token",
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        };
        body = "client_id=" + global.config.oauth.google.apiKey + "&" +
          "redirect_uri=" + global.config.oauth.google.redirectUri + "&" +
          "client_secret=" + global.config.oauth.google.secret + "&" +
          "grant_type=authorization_code&" +
          "code=" + req.query.code;
        request(options, body)
          .then(function(data){
            if(data.hasOwnProperty("accessToken")){
              resolve(data);
            }else{
              reject(new Error("No access token found"));
            }
          })
          .catch(function(e){
            reject(new Error(e.message));
          });
      }else{
        reject(new Error("No code found in query string"));
      }
    });
  },
  /**
   * Retrieves user information from google.
   *
   * @method Google.getUser
   * @public
   *
   * @param {HttpRequest} req
   * @returns {Promise}
   */
  getUser: function(req) {
    var options = {
      hostname: "www.googleapis.com",
      path: "/plus/v1/people/me",
      method: "GET",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Authorization": "Bearer " + req.session.oauth.google.accessToken
      }
    };
    return request(options, " ");
  }
};
