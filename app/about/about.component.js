(function () {
    'use strict';

    angular
        .module('myApp.about')
        .component('appAbout', appAbout());

    function appAbout() {
        var directive = {
            controller: AboutController,
            templateUrl: 'app/about/about.html',
            controllerAs: 'vm',
            restrict: 'E',
            bindings: {
                name: '='
            }
        };

        return directive;
    }

    AboutController.$inject = ['$scope'];

    function AboutController($scope) {
        var vm = this;

        vm.title = 'AboutController';

        activate();

        function activate() {
        }
    }
})();