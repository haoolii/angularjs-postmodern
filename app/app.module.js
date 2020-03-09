(function () {
    'use strict';

    angular
        .module('myApp', [
            'ui.router',
            'myApp.home',
            'myApp.header',
            'myApp.footer',
            'myApp.about',
            'myApp.work'
        ]).config(App);

    App.$inject = ['$stateProvider'];

    function App($stateProvider) {
        var homeState = {
            name: 'home',
            url: '/home',
            template: '<app-home></app-home>'
        }
        var aboutState = {
            name: 'about',
            url: '/about',
            template: '<app-about></app-about>'
        }
        var workState = {
            name: 'work',
            url: '/work',
            template: '<app-work></app-work>'
        }

        $stateProvider.state(homeState);
        $stateProvider.state(aboutState);
        $stateProvider.state(workState);
    }
})();
