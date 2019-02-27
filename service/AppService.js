/**
 * This Service will hold all the needed Requests
 * and some manipulations to return to Frontend
 */
app.service('AppService', ['$http', 'FrameworkUtils', function($http, FrameworkUtils) {

    //App Service URL  
    this.serviceWS = 'http://localhost';

    /********************************************************************************
     * Home
     ********************************************************************************/
    /**
     * #A - Get Client List to Home
     * parameter to server: none. 
     * It is a GET 
     */
    this.HOME_getAllClients  = function(){
        let clientsList = [
            {
                id : 1,
                name : 'Miguel Pereira',
                email : 'mp@ht.com',
                address : 'Lisboa',
                phone : '912231234'
            },
            {
                id : 2,
                name : 'Jõao Batalha',
                email : 'jb@ht.com',
                address : 'Oeiras',
                phone : '914443234'
            },
            {
                id : 3,
                name : 'Gilberta Dias',
                email : 'gd@ht.com',
                address : 'Azeitão',
                phone : '914422234'
            },
            {
                id : 4,
                name : 'Rui Pereira',
                email : '32@ht.com',
                address : 'Lisboa',
                phone : '912231234'
            },
            {
                id : 5,
                name : 'Miguel Mota',
                email : 'dd@ht.com',
                address : 'Oeiras',
                phone : '914443234'
            },
            {
                id : 6,
                name : 'Lopes Gonga',
                email : 'sad@ht.com',
                address : 'Azeitão',
                phone : '914422234'
            },
            {
                id : 7,
                name : 'Quasimodo Soares',
                email : 'mgap@ht.com',
                address : 'Lisboa',
                phone : '912231234'
            },
            {
                id : 8,
                name : 'Denise Teixeira',
                email : 'jbhsd@ht.com',
                address : 'Oeiras',
                phone : '914443234'
            },
            {
                id : 9,
                name : 'Pereira da Cunha',
                email : 'gsdd@ht.com',
                address : 'Azeitão',
                phone : '914422234'
            },
        ];

        return new Promise(function(resolve, reject) {
            setTimeout(function() {
                resolve( {data : clientsList} );
            });
        });

        //Use the code below

        let serviceURL = this.serviceWS + '/getAllClients';

        return FrameworkUtils.Http_GET(serviceURL).then(function(result){     
            return result.data;
        });
    }    

    this.HOME_getClientInfo  = function(clientParameter){
        let clientsList = [
            {
                id : 1,
                name : 'Miguel Pereira',
                email : 'mp@ht.com',
                address : 'Lisboa',
                phone : '912231234'
            },
            {
                id : 2,
                name : 'Jõao Batalha',
                email : 'jb@ht.com',
                address : 'Oeiras',
                phone : '914443234'
            },
            {
                id : 3,
                name : 'Gilberta Dias',
                email : 'gd@ht.com',
                address : 'Azeitão',
                phone : '914422234'
            },
            {
                id : 4,
                name : 'Rui Pereira',
                email : '32@ht.com',
                address : 'Lisboa',
                phone : '912231234'
            },
            {
                id : 5,
                name : 'Miguel Mota',
                email : 'dd@ht.com',
                address : 'Oeiras',
                phone : '914443234'
            },
            {
                id : 6,
                name : 'Lopes Gonga',
                email : 'sad@ht.com',
                address : 'Azeitão',
                phone : '914422234'
            },
            {
                id : 7,
                name : 'Quasimodo Soares',
                email : 'mgap@ht.com',
                address : 'Lisboa',
                phone : '912231234'
            },
            {
                id : 8,
                name : 'Denise Teixeira',
                email : 'jbhsd@ht.com',
                address : 'Oeiras',
                phone : '914443234'
            },
            {
                id : 9,
                name : 'Pereira da Cunha',
                email : 'gsdd@ht.com',
                address : 'Azeitão',
                phone : '914422234'
            },
        ];

        return new Promise(function(resolve, reject) {
            setTimeout(function() {

                clientsList.forEach((client)=>{
                    if(client.id === clientParameter.id){
                        resolve( {data : client} );
                    }
                });
                
            });
        });

        //Use the code below

        let serviceURL = this.serviceWS + '/getClientInfo';
        let parameter = clientParameter;

        return FrameworkUtils.Http_POST(serviceURL, parameter).then(function(result){     
            return result.data;
        });
    }    
    
}]);
