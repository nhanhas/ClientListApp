app
.controller('HomeController', ['$scope', '$location','$q', 'AppService', function($scope, $location, $q , AppService) { 
	
	/**
	 * Controller variables
	 */
	$scope.view = {
		isLoading : true,
		searchExpression : '',
		clientList : []
	};



	//#INITIALIZE Home data
	$scope.initialize = function(){
		
		//#1 - Prepare Queue of promises
		let promises = [];
		
		//#1.1 - Promotions
		promises.push($scope.getAllClients());

		//#Finally get all promises
		$q.all(promises).then((result)=>{
			//Show screen			
			$scope.view.isLoading = false;
			
			
		});

	};


	/**
	 * Functions to retrieve 
	 * server data
	 */
	//#A - Get Clients from server
	$scope.getAllClients = function(){

		//#1 - Get Clients by calling server
		return AppService.HOME_getAllClients().then((result)=>{

			console.log(result);

			//#2 - Process result
			if(result && result.data){
				let listOfClients = result.data;
								
				//#3 - Iterate list to prepare to show
				listOfClients.forEach((client)=>{

					//#3.1 - Create a new item 
					let newClient = {
						id: client.id,
						name: client.name,
						email: client.email,
						phone : client.phone,
						address : client.address
					};

					//#3.2 - Push it to client List
					$scope.view.clientList.push(newClient);
				});

			}

		});
	};

	//#1 - Load Application Data from Server
	$scope.initialize();

}]);


