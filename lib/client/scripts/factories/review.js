/**
 * # Review Factory
 *
 * Manages all CRUD functionality for reviews in the platform.
 */

"use strict";

module.exports = function($http){
  return {
    /**
     * Retrieves all the reviews relative to a given
     * service provider.
     *
     * @method Review.getByProvider
     * @public
     *
     * @param {Number} providerId
     * @returns {$http}
     */
    getByProvider: function(providerId){
      return $http({
        method: "GET",
        url: "/api/1.0/review/provider?id=" + providerId
      });
    }
  };
};
