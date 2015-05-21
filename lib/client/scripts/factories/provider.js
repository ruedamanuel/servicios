/**
 * # Provider Factory
 *
 * All necessary services for retrieving service
 * provider information.
 */

"use strict";

module.exports = function($http){
  return {
    /**
     * Retrieves all service providers that are registered
     * to the profession provided.
     *
     * @method Provider.getByProfession
     *
     * @param {String} profession
     * @returns {$http}
     */
    getByProfession: function(profession){
      return $http({
        method: "GET",
        url: "/api/1.0/providers/" + profession
      });
    },
    /**
     * Retrieves the info for a single provider through the
     * provider alias.
     *
     * @param {String} alias
     * @returns {$http}
     */
    getByAlias: function(alias){
      return $http({
        method: "GET",
        url: "/api/1.0/providers/get/" + alias
      });
    }
  };
};
