(function () {
    'use strict';

    angular
        .module('myApp.footer')
        .component('appFooter', appFooter());

    function appFooter() {
        var directive = {
            controller: FooterController,
            templateUrl: 'app/footer/footer.html',
            restrict: 'E',
            bindings: {
                name: '='
            }
        };

        return directive;
    }

    FooterController.$inject = [];

    function FooterController() {
        var vm = this;

        vm.title = 'FooterController';

        activate();

        function activate() {
        }
    }
})();