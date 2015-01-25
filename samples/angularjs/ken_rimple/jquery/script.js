angular.module('myApp', [])
    .controller('PageSetupCtrl', function ($scope) {
        $scope.colorIn = 'red';
        $scope.colorOut = 'blue';
    })
    .directive('changeColor', function () {
        return {
            restrict: 'A',
            scope: {
                'in': '@',
                'out': '@'
            },
            template: '<span>hover color: {{ in }}<br/>Exit hover color: {{ out }}</span>',
            link: function (scope, element, attrs) {
                scope.in = attrs.colorIn;
                scope.out = attrs.colorOut;
                element.mouseover(function (event) {
                    element.css({
                        'background-color': scope.in
                    });
                });
                element.mouseout(function (event) {
                    element.css({
                        'background-color': scope.out
                    });
                });
            }
        };
    });