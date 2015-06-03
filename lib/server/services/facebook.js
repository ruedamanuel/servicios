/**
 * # Facebook Service
 *
 * Used for all OAuth and API calls to facebook.
 */

"use strict";

var q = require("q"),
  request = require("../utils/request");

module.exports = {
  /**
   * Sends back the base url for starting the authentication
   * process with facebook.
   *
   * @method Facebook.getLoginUrl
   * @public
   *
   * @returns {String}
   */
  getLoginUrl: function(){
    var path = [
      "https://www.facebook.com/dialog/oauth?",
      "client_id=" + global.config.oauth.facebook.apiKey + "&",
      "redirect_uri=" + global.config.oauth.facebook.redirectUri + "&",
      "scope=" + global.config.oauth.facebook.scope.join(",")
    ];
    return path.join("");
  },
  /**
   * Retrieves a new access token provided by facebook.
   *
   * @method Facebook.getAccessToken
   * @public
   *
   * @param {HttpRequest} req
   * @returns {Promise}
   */
  getAccessToken: function(req){
    var options;
    return q.Promise(function(resolve, reject){
      if(req.query.hasOwnProperty("code")){
        options = {
          hostname: "graph.facebook.com",
          path: "/v2.3/oauth/access_token?" +
            "client_id=" + global.config.oauth.facebook.apiKey + "&" +
            "redirect_uri=" + global.config.oauth.facebook.redirectUri + "&" +
            "client_secret=" + global.config.oauth.facebook.secret + "&" +
            "code=" + req.query.code,
          method: "GET",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        };

        request(options, " ")
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
   * Retrieves user information from facebook.
   *
   * @method Facebook.getUser
   * @public
   *
   * @param {HttpRequest} req
   * @returns {Promise}
   */
  getUser: function(req) {
    var options = {
      hostname: "graph.facebook.com",
      path: "/me?access_token=" + req.session.oauth.facebook.accessToken,
      method: "GET",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    };
    return request(options, " ");
  }
};
