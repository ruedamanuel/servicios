/**
 * # UI Router Index
 */

"use strict";

module.exports = function($stateProvider, $urlRouterProvider){

  /**
   * Unmatched URL route
   */
  $urlRouterProvider.otherwise("/");

  /**
   * Default states
   */
  $stateProvider
    .state("app", {
      abstract: true,
      views: {
        header: {
          templateUrl: "/static/views/main/header.html",
          controller: require("../controllers/header")
        },
        content: {
          templateUrl: "/static/views/main/content.html"
        },
        footer: {
          templateUrl: "/static/views/main/footer.html",
          controller: require("../controllers/footer")
        }
      }
    })
    .state("app.home", {
      url: "/home",
      templateUrl: "/static/views/home",
      controller: require("../controllers/home")
    });
};