/**
 * # Service Search Directive
 *
 * This is the search input field that will be used for retrieving
 * service providers from the service.
 */

"use strict";

module.exports = function(){
  return {
    restrict: "A",
    templateUrl: "/static/views/directives/sServiceSearch.html",
    link: function(scope, element, attr){
      console.log("loaded search directive", element, attr);
      scope.$watch("searchTerm", function(n,o){
        console.log(n, o);
      });
    }
  };
};
