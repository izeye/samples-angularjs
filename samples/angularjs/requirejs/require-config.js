require.config({
    paths: {
        'angular': '../../../libs/angularjs/1.3.9/angular.min'
    },
    shim: {
        'angular': {'exports': 'angular'}
    }
});

require(['angular', 'app'], function (angular) {
    angular.element().ready(function () {
        angular.bootstrap(document.body, ['myApp']);
    });
});