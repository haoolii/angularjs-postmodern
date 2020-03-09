(function () {
    'use strict';

    angular
        .module('myApp.work', [
            'ui.router'
        ])
        .config(Work);

    Work.$inject = ['$stateProvider'];

    function Work($stateProvider) {
        var workCodeState = {
            name: 'work.code',
            url: '/code',
            template: '<app-work-code></app-work-code>'
        }
        var workMarketingCodeState = {
            name: 'work.marketing',
            url: '/marketing',
            template: '<app-work-marketing></app-work-marketing>'
        }
        var workWebDesignCodeState = {
            name: 'work.webDesign',
            url: '/web-design',
            template: '<app-work-web-design></app-work-web-design>'
        }

        $stateProvider.state(workCodeState);
        $stateProvider.state(workMarketingCodeState);
        $stateProvider.state(workWebDesignCodeState);
    }
})();