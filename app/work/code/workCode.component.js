(function () {
    'use strict';

    angular
        .module('myApp.work')
        .component('appWorkCode', appWorkCode());

    function appWorkCode() {
        var directive = {
            controller: WorkCodeController,
            templateUrl: 'app/work/code/workCode.html',
            controllerAs: 'vm',
            restrict: 'E',
            bindings: {
                name: '='
            }
        };
        return directive;
    }

    WorkCodeController.$inject = [];

    function WorkCodeController() {
        var vm = this;

        vm.title = 'WorkCodeController';

        activate();

        function activate() {
        }
    }
})();