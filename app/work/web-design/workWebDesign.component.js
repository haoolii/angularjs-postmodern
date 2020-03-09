(function () {
    'use strict';

    angular
        .module('myApp.work')
        .component('appWorkWebDesign', appWorkWebDesign());

    function appWorkWebDesign() {
        var directive = {
            controller: WorkWebDesignController,
            templateUrl: 'app/work/web-design/workWebDesign.html',
            controllerAs: 'vm',
            restrict: 'E',
            bindings: {
                name: '='
            }
        };
        return directive;
    }

    WorkWebDesignController.$inject = [];

    function WorkWebDesignController() {
        var vm = this;

        vm.title = 'WorkMarketingController';

        activate();

        function activate() {
        }
    }
})();