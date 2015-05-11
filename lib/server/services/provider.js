/**
 * # Provider Service
 */

"use strict";

var mysql = require("./mysql");

module.exports = {
  getByProfession: function(req){
    var query = [
      "SELECT `prov`.* FROM profession AS p",
      "JOIN service_provider_profession AS spp ON p.`id` = spp.`profession_id`",
      "JOIN service_provider AS prov ON spp.`service_provider_id` = prov.`id`",
      "WHERE p.name = ?"
    ];
    return mysql.query(query.join(" "), [req.params.profession]);
  }
};
