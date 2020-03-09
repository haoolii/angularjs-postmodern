(function () {
    'use strict';

    angular
        .module('myApp')
        .component('appComponent', appComponent());
    
    function appComponent() {
        var directive = {
            controller: AppController,
            templateUrl: 'app/app.component.html',
            restrict: 'E',
            scope: {}
        };

        return directive;
    }

    AppController.$inject = ['$scope'];

    function AppController($scope) {
        var vm = this;

        console.log($scope);
        
        vm.title = 'AppController';

        activate();

        function activate() {

        }
    }
})();

