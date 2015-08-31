/**
 * # User Service
 *
 * Handles all data i/o related to users.
 */

"use strict";

var mysql = require("./mysql"),
    log = require("../utils/logger");

module.exports = {
  /**
   * Finds a user matching a provided email.
   *
   * @method User.findByEmail
   * @public
   *
   * @param {String} email
   * @returns {Promise}
   */
  findByEmail: function(email){
    var query = [
      "SELECT u.* FROM user AS u JOIN email AS e ON e.user_id = u.id",
      "WHERE e.email = ?"
    ];
    return mysql.query(query.join(" "), [email]);
  },
  /**
   * Finds a user matching a provided id.
   *
   * @method User.findById
   * @public
   *
   * @param {String} id
   * @returns {Promise}
   */
  findById: function(id){
    var query = [
      "SELECT * FROM user WHERE id = ?"
    ];
    return mysql.query(query.join(" "), [id]);
  },
  /**
   * Creates a user in the database.
   *
   * @method User.create
   * @public
   *
   * @param {HttpRequest} req
   * @returns {Promise}
   */
  create: function(req){
    log.info(req.body);
    var query = [
        "CALL RegisterUser(?, ?, ?, ?, ?);"
      ],
      params = [
        req.body.email,
        req.body.name,
        req.body.lastName,
        0,
        req.body.password
      ];
    log.info(query.join(" "));
    return mysql.query(query.join(" "), params);
  }
};
