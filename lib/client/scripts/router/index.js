/**
 * # UI Router Index
 */

"use strict";

module.exports = function($stateProvider, $urlRouterProvider){

  var getTemplate = function(templatePath){
    return function($templateCache){
      return $templateCache.get(templatePath);
    };
  };

  /**
   * Unmatched URL route
   */
  $urlRouterProvider.otherwise("/home");

  /**
   * Default states
   */
  $stateProvider
    .state("app", {
      abstract: true,
      views: {
        header: {
          templateProvider: getTemplate("main/header.html"),
          controller: require("../controllers/header")
        },
        content: {
          templateProvider: getTemplate("main/content.html")
        },
        footer: {
          templateProvider: getTemplate("main/footer.html"),
          controller: require("../controllers/footer")
        }
      }
    })
    .state("app.home", {
      url: "/home",
      templateProvider: getTemplate("home/index.html"),
      controller: require("../controllers/home")
    })
    .state("app.search", {
      url: "/search?query",
      templateProvider: getTemplate("search/index.html"),
      controller: require("../controllers/search")
    })
    .state("app.provider", {
      url: "/provider/:alias",
      templateProvider: getTemplate("providerProfile/public.html"),
      controller: require("../controllers/providerProfile")
    });
};