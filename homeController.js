(function() {
    "use strict";

    angular
        .module("gb")
        .controller("HomeController", HomeController);

    HomeController.$inject = ["$http", "$stateParams"];

    function HomeController($http, $stateParams) {
        var vm = this;
        vm.name = "goodbedford";

    }
})();
