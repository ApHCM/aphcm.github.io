angular.module('CalculatorApp', [])
    .controller('CalculatorController', function($scope) {
        var hv_mean = 3.65639
        var hv_std = 0.647852
        $scope.result = function() {
            if ($scope.operator == '+') {
                return $scope.a + $scope.b;
            }
            if ($scope.operator == '-') {
                return $scope.a - $scope.b;
            }
            if ($scope.operator == '*') {
                return $scope.a * $scope.b;
            }
            if ($scope.operator == '/') {
                return $scope.a / $scope.b;
            }
        };

        $scope.apbasal = function() {
            return ($scope.maxapex / $scope.maxbasal).toFixed(2);
        };

        $scope.zscore = function() {
            return ((($scope.maxapex/$scope.bsa) - hv_mean) / hv_std).toFixed(2);
        };

    });