/**
 * # Service Search Directive
 *
 * This is the search input field that will be used for retrieving
 * service providers from the service.
 */

"use strict";

var _ = require("lodash");

module.exports = function(Profession){
  return {
    restrict: "A",
    templateUrl: "/static/views/directives/sServiceSearch.html",
    link: function(scope, element, attr){
      console.log("loaded search directive", element, attr);

      scope.disabled = undefined;

      scope.enable = function() {
        scope.disabled = false;
      };

      scope.disable = function() {
        scope.disabled = true;
      };

      scope.clear = function() {
        scope.selected = undefined;
      };

      scope.$watch("searchTerm", function(n,o){
        console.log(n, o);
      });
      scope.results = [
        "Carpintero",
        "Mecánico",
        "Panadero"
      ];

      scope.refreshResults = function(val){
        Profession.search(val)
          .success(function(results){
            scope.results = _.pluck(results, "name");
          })
          .error(function(e){
            console.error(e);
          });
      };

      scope.selectedOption = function(val){
        console.log("selected", val);
      };
    }
  };
};
