(function () {
    'use strict';

    angular
        .module('myApp', [
            'ngRoute',
            'myApp.home',
            'myApp.header',
            'myApp.footer',
            'myApp.about'
        ]).config(App);

    App.$inject = ['$routeProvider'];

    function App($routeProvider) {
        $routeProvider
            .when("/", {
                template: "<app-home></app-home>"
            })
            .when("/home", {
                template: "<app-home></app-home>"
            })
            .when("/about", {
                template: "<app-about></app-about>"
            })
    }
})();
