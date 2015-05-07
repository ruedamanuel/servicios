/**
 * # Profession Factory
 *
 * All necessary services for interaction with the
 * profession table.
 */

"use strict";

module.exports = function($http){
  return {
    /**
     * Retrieves all professions matching or partially
     * matching the search term provided.
     *
     * @method Profession.search
     *
     * @param {String} term
     * @returns {$http}
     */
    search: function(term){
      return $http({
        method: "GET",
        url: "/api/1.0/profession?search=" + term
      });
    }
  };
};
