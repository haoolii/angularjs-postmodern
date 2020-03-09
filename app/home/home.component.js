(function () {
    'use strict';

    angular
        .module('myApp.home')
        .component('appHome', appHome());

    function appHome() {
        var directive = {
            controller: HomeController,
            templateUrl: 'app/home/home.html',
            controllerAs: 'vm',
            restrict: 'E',
            bindings: {
                name: '='
            }
        };

        return directive;
    }

    HomeController.$inject = ['$scope'];

    function HomeController($scope) {
        var vm = this;

        vm.title = 'HomeController';

        activate();

        function activate() {
        }
    }
})();