angular.module('myApp', [])
    .controller('MainCtrl', function ($scope) {
        $scope.customer = {
            first_name: 'Rob',
            last_name: 'Banks'
        };
    })
    .directive('customer', function () {
        return {
            restrict: 'E',
            templateUrl: 'customer.html',
            scope: {
                first_name: '@firstName',
                last_name: '@lastName'
            }
        };
    });