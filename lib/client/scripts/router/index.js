/**
 * # UI Router Index
 */

"use strict";

module.exports = function($stateProvider, $urlRouterProvider){
  console.log("UI router setup");

  /**
   * Unmatched URL route
   */
  $urlRouterProvider.otherwise("/");

  /**
   * Default states
   */
  $stateProvider
    .state("app", {
      url: "/",
      views: {
        header: {
          templateUrl: "/static/views/main/header.html",
          controller: function($scope){ console.log("read"); $scope.test = "Testing"; }
        },
        content: {
          templateUrl: "/static/views/main/content.html"
        },
        footer: {
          templateUrl: "/static/views/main/footer.html"
        }
      }
    });
};