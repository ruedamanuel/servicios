/**
 * # User Service
 *
 * Handles all data i/o related to users.
 */

"use strict";

var mysql = require("./mysql");

module.exports = {
  findByEmail: function(email){
    var query = [
      "SELECT u.* FROM user AS u JOIN email AS e ON e.user_id = u.id",
      "WHERE e.email = ?"
    ];
    return mysql.query(query.join(" "), [email]);
  },
  findById: function(id){
    var query = [
      "SELECT * FROM user WHERE id = ?"
    ];
    return mysql.query(query.join(" "), [id]);
  }
};
