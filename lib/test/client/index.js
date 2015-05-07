/**
 * # Client Tests Index
 *
 * Lists all unit tests that should be run with gulp.
 */

"use strict";

(function(){
  require("./factories/profession");

  require("./controllers/header");
  require("./controllers/home");
  require("./controllers/footer");

  //TODO: figure out a way to preprocess the html with mocha and gulp
  //require("./directives/sServiceSearch");
})();
