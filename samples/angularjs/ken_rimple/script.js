angular.module('myApp', [])
    .controller('MainCtrl', function ($scope) {
        $scope.message = 'Well, hello yourself!';

        $scope.yell = function () {
//            alert("aaahhh!");
            alert($scope.name);
        }

        $scope.numbers = [1, 2, 3, 4, 5];
    });