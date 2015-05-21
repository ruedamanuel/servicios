/**
 * # Provider Service
 */

"use strict";

var mysql = require("./mysql");

module.exports = {
  getByProfession: function(req){
    var query = [
      "SELECT `prov`.*, `i`.`uri` AS icon_uri, `bg`.`uri` AS background_uri FROM profession AS p",
      "JOIN service_provider_profession AS spp ON p.`id` = spp.`profession_id`",
      "JOIN service_provider AS prov ON spp.`service_provider_id` = prov.`id`",
      "JOIN images AS i ON prov.`img_icon` = i.`id`",
      "JOIN images AS bg ON prov.`img_bg` = bg.`id`",
      "WHERE p.name = ?"
    ];
    return mysql.query(query.join(" "), [req.params.profession]);
  },
  getByAlias: function(req){
    var query = [
      "SELECT `prov`.*, `i`.`uri` AS icon_uri, `bg`.`uri` AS background_uri FROM profession AS p",
      "JOIN service_provider_profession AS spp ON p.`id` = spp.`profession_id`",
      "JOIN service_provider AS prov ON spp.`service_provider_id` = prov.`id`",
      "JOIN images AS i ON prov.`img_icon` = i.`id`",
      "JOIN images AS bg ON prov.`img_bg` = bg.`id`",
      "WHERE `prov`.`alias` = ?"
    ];
    return mysql.query(query.join(" "), [req.params.alias]);
  }
};
