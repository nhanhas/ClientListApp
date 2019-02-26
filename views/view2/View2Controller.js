app
    .controller('View2Controller', ['$scope', '$location', function($scope, $location) {
        $scope.move = false;

        $scope.navigate = function (path) {
            $location.path(path);
        };

    }]);