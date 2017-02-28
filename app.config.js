(function () {
	"use strict";

	angular
		.module("gb")
		.config(config);

	config.$inject = ["$locationProvider", "$stateProvider", "$urlRouterProvider"];

	function config($locationProvider, $stateProvider, $urlRouterProvider) {

    var homeState = {
      name: "home",
      url: "/home",
      views: {
        "": {
          templateUrl: "home.tpl.html",
          controller: "HomeController",
          controllerAs: "homeCtrl",
        }
      }
    }


    $stateProvider.state(homeState);

		$urlRouterProvider.otherwise("/home");



		//remove hash in urls
		$locationProvider.html5Mode({
			enabled: false,
			requireBase: false
		});
	}

})();
