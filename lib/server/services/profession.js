/**
 * # Profession Service
 */

"use strict";

var q = require("q"),
  mysql = require("./mysql");

module.exports = {
  /**
   * Returns a promise that contains the result array of
   * professions that match the search query.
   *
   * @method Profession.search
   *
   * @param {HttpRequest} req
   * @returns {Promise}
   */
  search: function(req){
    var term = "%" + req.query.search + "%";
    return q.Promise(function(resolve, reject){
      if(req.query.hasOwnProperty("search")){
        mysql.query("SELECT * FROM `profession` as p WHERE LOWER(p.`name`) LIKE LOWER(?) LIMIT 5",
          [term])
          .then(function(result){
            resolve(result);
          })
          .catch(function(e){
            reject(e);
          });
      }else{
        reject(new Error("No search parameter in query string"));
      }
    });
  }
};
