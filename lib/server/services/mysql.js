/**
 * # MySQL Database Service
 *
 * Manages the connection pool that interfaces with the
 * MySQL database that manages the persistent storage of
 * the application.
 */

"use strict";

var mysql = require("mysql"),
  log = require("../utils/logger"),
  pool = null,
  q = require("q"),
  format = require("../utils/formatter");

module.exports = {
  /**
   * Initializes MySQL connection pool.
   *
   * @method Mysql.init
   * @param {Object} params
   */
  init: function(params){
    /**
     * Check that all necessary parameters are in the params object
     */
    if(params.hasOwnProperty("host") &&
      params.hasOwnProperty("user") &&
      params.hasOwnProperty("password")){
      pool = mysql.createPool(params);
    }else{
      log.error("Parameters for establishing connection with MySQL are incomplete");
      throw new Error();
    }
  },
  /**
   * Checks out a connection and performs the query provided.
   *
   * @method Mysql.query
   * @param {String} query
   * @param {Array} values
   *
   * @example
   *  mysql.query("SELECT * FROM profession WHERE id > ?", [5])
   *    .then(function(result){
   *      log.info("it works: ", result);
   *    })
   *    .catch(function(e){
   *      log.error("Failed: ", e);
   *    });
   *
   * @returns {Promise}
   */
  query: function(query, values){
    return q.Promise(function(resolve, reject){
      pool.getConnection(function(error, connection){
        if(error){
          reject(error);
        }else{
          connection.query(query, values, function(err, rows){
            if(err){
              reject(err);
            }else{
              resolve(format.camelCaseArray(rows));
            }
            connection.release();
          });
        }
      });
    });
  }
};
