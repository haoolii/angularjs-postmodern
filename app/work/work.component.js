(function () {
    'use strict';

    angular
        .module('myApp.work')
        .component('appWork', appWork());

    function appWork() {
        var directive = {
            controller: WorkController,
            templateUrl: 'app/work/work.html',
            controllerAs: 'vm',
            restrict: 'E',
            bindings: {
                name: '='
            }
        };

        return directive;
    }

    WorkController.$inject = [];

    function WorkController() {
        var vm = this;

        vm.title = 'WorkController';

        activate();

        function activate() {
        }
    }
})();