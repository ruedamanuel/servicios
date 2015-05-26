/**
 * # Review Service
 */

"use strict";

var mysql = require("./mysql");

module.exports = {
  /**
   * Returns all reviews that are associated to a given
   * service provider.
   *
   * @method Review.getByProvider
   * @public
   *
   * @param {HttpRequest} req
   * @returns {Promise}
   */
  getByProvider: function(req){
    var query = [
      "SELECT * FROM review WHERE service_provider_id = ?"
    ];
    return mysql.query(query.join(" "), [req.query.id]);
  }
};
