app
.controller('LoginController', ['$scope', '$location','$q', '$timeout', 'AppService', function($scope, $location, $q , $timeout, AppService) { 
	
	/**
	 * Controller variables
	 */
	$scope.view = {
		isLoading : true		
	};

    $scope.userLogin = function(){
        $location.path('/home');
    }

}]);