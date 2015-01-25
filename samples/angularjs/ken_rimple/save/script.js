angular.module('myApp', [])
    .controller('MainCtrl', function ($scope) {
        $scope.customer = {
            firstName: 'Rob',
            lastName: 'Banks'
        };

        $scope.saveCustomer = function (first, last) {
            $scope.customer = { firstName: first, lastName: last };
        };
    })
    .directive('customer', function () {
        return {
            restrict: 'E',
            templateUrl: 'customer.html',
            scope: {
                save: '&'
            }
        };
    });