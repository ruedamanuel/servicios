/**
 * # Provider Service
 */

"use strict";

var mysql = require("./mysql");

module.exports = {
  /**
   * Returns all service providers that perform a given profession.
   *
   * @method Provider.getByProfession
   * @public
   *
   * @param {HttpRequest} req
   * @returns {Promise}
   */
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
  /**
   * Retrieves all the info that relates to a provider through
   * the alias in the http request.
   *
   * @method Provider.getByAlias
   * @public
   *
   * @param {HttpRequest} req
   * @returns {Promise}
   */
  getByAlias: function(req){
    var query = [
      "SELECT `prov`.*, `i`.`uri` AS icon_uri, `bg`.`uri` AS background_uri, AVG(`r`.`rating`) AS rating,",
      "COUNT(DISTINCT `r`.`id`) AS total_reviews FROM profession AS p",
      "JOIN service_provider_profession AS spp ON p.`id` = spp.`profession_id`",
      "JOIN service_provider AS prov ON spp.`service_provider_id` = prov.`id`",
      "JOIN images AS i ON prov.`img_icon` = i.`id`",
      "JOIN images AS bg ON prov.`img_bg` = bg.`id`",
      "JOIN review AS r ON prov.`id` = r.`service_provider_id`",
      "WHERE `prov`.`alias` = ?"
    ];
    return mysql.query(query.join(" "), [req.params.alias]);
  }
};
