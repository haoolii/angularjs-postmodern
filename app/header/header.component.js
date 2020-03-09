(function () {
    'use strict';

    angular
        .module('myApp.header')
        .component('appHeader', appHeader());

    function appHeader() {
        var directive = {
            controller: HeaderController,
            controllerAs: 'vm',
            templateUrl: 'app/header/header.html',
            restrict: 'E',
            bindings: {
                name: '='
            }
        };

        return directive;
    }

    HeaderController.$inject = ['$scope', '$location'];

    function HeaderController($scope, $location) {
        var vm = this;

        vm.title = 'HeaderController';

        activate();

        function activate() {
            vm.goto = function(where) {
                $location.path('/' + where);
            }
        }
    }
})();