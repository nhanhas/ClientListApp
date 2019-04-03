/**
 * This Service will hold all the needed Requests
 * and some manipulations to return to Frontend
 */
app.service('AppService', ['$http', 'FrameworkUtils', function($http, FrameworkUtils) {

    //App Service URL  
    this.serviceWS = 'http://platform.folques.com/platform/api';

    /********************************************************************************
     * Home
     ********************************************************************************/
    /**
     * #A - Get Client List to Home
     * parameter to server: none. 
     * It is a GET 
     */
    this.HOME_getAllClients  = function(){
        //Use the code below

        let serviceURL = this.serviceWS + '/getClients';

        return FrameworkUtils.Http_GET(serviceURL).then(function(result){     
            return result.data;
        });
    }    

    this.HOME_getClientInfo  = function(clientParameter){
       
        let serviceURL = this.serviceWS + '/getClientInfo?idClient=' + clientParameter.id;
        let parameter = clientParameter;

        return FrameworkUtils.Http_GET(serviceURL).then(function(result){     
            return result.data;
        });
    }    

    this.HOME_saveCommentClient  = function(commentParameter){
       

        let serviceURL = this.serviceWS + '/saveCommentClient';
        let parameter = commentParameter;
        
        return FrameworkUtils.Http_POST(serviceURL, parameter).then(function(result){     
            return result.data;
        });
    }    

    
}]);
