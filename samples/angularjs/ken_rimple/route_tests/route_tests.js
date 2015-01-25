angular.module('myApp', ['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider.when('/one', {
            controller: 'OneCtrl',
            templateUrl: 'template1.html'
        })
        .when('/two', {
            templateUrl: 'template2.html'
        })
        .otherwise({
            redirectTo: '/one'
        })
    })
    .controller('MainCtrl', function ($scope) {
        $scope.message = 'Well, hello yourself!';
    })
    .controller('OneCtrl', function ($scope, messageService) {
        $scope.message = 'I am controller 1!';
        $scope.logMessage = function (msg) {
            messageService.logMessage(msg);
        };
    })
    .factory('messageService', function ($log) {
        return {
            logMessage: function (message) {
                $log.debug("message for you sir", message);
            }
        };
    });