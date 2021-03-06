app
.controller('HomeController', ['$scope', '$location','$q', '$timeout', 'AppService', function($scope, $location, $q , $timeout, AppService) { 
	
	/**
	 * Controller variables
	 */
	$scope.view = {
		isLoading : true,
		searchExpression : '',
		commentText : '',
		selectedClient : undefined,
		clientList : [],
		clientPanelOpened : false
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
			if(result){
				let listOfClients = result;
								
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


	/**
	 * Behaviour functions
	 */
	
    window.onpopstate = function () {
		$timeout(()=>{
			$scope.showPanel(undefined, true);
		});		
    };


	//#A - Allow to show/hide panels (param <panel> = undefined, will close all)
	$scope.showPanel = function(panel, isBrowserPopState = false){
		//#1 - First we reset all 'Opened' flags
		$scope.view.clientPanelOpened = false;

		//#1.1 - Clear comment
		$scope.view.commentText = '';
		
		scroll(0,0);

		//#2 - Set visible the requested panel
		switch (panel) {
			//#i - Client information panel
			case 'client-info':
				$scope.view.clientPanelOpened = true;
				break;		
			default:
				if(!isBrowserPopState)
					history.back();
				break;
		}
		
	}
	//#A - When a client is clicked
	$scope.onPressClientHandler = function(client){
		
		//#1 - Prepare client parameter to request
		let clientParameter = { id : client.id };

		//#1 - Call Server to get client info
		return AppService.HOME_getClientInfo( clientParameter ).then((result)=>{		
			//#2 - If we got client info
			if(result){
				//#2.1 - Show it			
				history.pushState(null, null, location.href);	
				$timeout(()=>{
					$scope.view.selectedClient = result;
					$scope.showPanel('client-info');		
							
				})		
								
			}
			
		});
		
	};

	//#B - When Send comment is clicked
	$scope.submitComment = function(commentText){
		//#1 - Send
		let postCommentParameter = {
			idclien : $scope.view.selectedClient.id,
			comment : commentText,
			user_id : 1 //for now
		}

		//#1 - Call Server to get client info
		return AppService.HOME_saveCommentClient( postCommentParameter ).then((result)=>{	
			console.log(result);	
			//#2 - If we got client info
			if(result){
				//Call again to show comment				
				return AppService.HOME_getClientInfo( {id : $scope.view.selectedClient.id } ).then((result)=>{		
					console.log(result);
					//#2 - If we got client info
					if(result){
						//#2.1 - Refresh it									
						$timeout(()=>{
							$scope.view.selectedClient = result;
							$scope.showPanel('client-info');											
						})												
					}					
				});
			}

				
			//#2 - Clear comment
			$scope.view.commentText = '';
			
		});

	}

	//#1 - Load Application Data from Server
	$scope.initialize();

}]);


