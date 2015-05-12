/**
 * # Search Controller
 *
 * Retrieves results for a particular query by profession.
 */

"use strict";

module.exports = function($scope, $log, $stateParams, Provider){
  $log.info("Loaded search controller");
  $scope.profession = $stateParams.query;
  $scope.providers = [];
  Provider.getByProfession($scope.profession)
    .success(function(results){
      $scope.providers = results;
    })
    .error(function(error){
      throw error;
    });

};
