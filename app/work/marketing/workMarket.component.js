(function () {
    'use strict';

    angular
        .module('myApp.work')
        .component('appWorkMarketing', appWorkMarketing());

    function appWorkMarketing() {
        var directive = {
            controller: WorkMarketingController,
            templateUrl: 'app/work/marketing/workMarket.html',
            controllerAs: 'vm',
            restrict: 'E',
            bindings: {
                name: '='
            }
        };
        return directive;
    }

    WorkMarketingController.$inject = [];

    function WorkMarketingController() {
        var vm = this;

        vm.title = 'WorkMarketingController';

        activate();

        function activate() {
        }
    }
})();