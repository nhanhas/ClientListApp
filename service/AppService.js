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
        let clientsList = [
            {
                "id": "49",
                "name": "Diego Fernando Rodríguez Aguilar",
                "email": "diego.photogo@gmail.com ",
                "morada": "",
                "phone": ""
            },
            {
                "id": "48",
                "name": "Lucile Verton",
                "email": "",
                "morada": "",
                "phone": ""
            },
            {
                "id": "47",
                "name": "Ruy Uhrbano",
                "email": "mfurbano@gmail.com",
                "morada": "",
                "phone": "964397968"
            },
            {
                "id": "46",
                "name": "Maria das Dores Folque",
                "email": "doresfolque@sapo.pt",
                "morada": "",
                "phone": "914937996"
            },
            {
                "id": "45",
                "name": "Miguel Cabral",
                "email": "",
                "morada": "",
                "phone": ""
            },
            {
                "id": "44",
                "name": "Domingos Folque Guimarães",
                "email": "",
                "morada": "",
                "phone": ""
            },
            {
                "id": "43",
                "name": "Pedro Morais ",
                "email": "",
                "morada": "",
                "phone": ""
            },
            {
                "id": "42",
                "name": "José Ferreira",
                "email": "zemiguelaf@gmail.com",
                "morada": "",
                "phone": "914594262"
            },
            {
                "id": "41",
                "name": "Tiago Pessoa",
                "email": "",
                "morada": "",
                "phone": ""
            },
            {
                "id": "40",
                "name": "Bruno Matos",
                "email": "brdesign@gmail.com",
                "morada": "",
                "phone": "964261847"
            },
            {
                "id": "39",
                "name": "António Braga",
                "email": "ajcbragafreetime@gmail.com",
                "morada": "",
                "phone": "917312602"
            },
            {
                "id": "38",
                "name": "Angelica Barros",
                "email": "angelica-barros@live.com",
                "morada": "",
                "phone": "937813828"
            },
            {
                "id": "37",
                "name": "Celma de Almeida",
                "email": "",
                "morada": "",
                "phone": ""
            },
            {
                "id": "36",
                "name": "Alexandra Ann",
                "email": "",
                "morada": "",
                "phone": ""
            },
            {
                "id": "35",
                "name": "Ingrid Schild",
                "email": "",
                "morada": "",
                "phone": ""
            },
            {
                "id": "34",
                "name": "Jeremias Antunes",
                "email": "",
                "morada": "",
                "phone": ""
            },
            {
                "id": "33",
                "name": "Maria das Dores Folque",
                "email": "",
                "morada": "",
                "phone": ""
            },
            {
                "id": "32",
                "name": "Jorge Pinho",
                "email": "",
                "morada": "",
                "phone": ""
            },
            {
                "id": "31",
                "name": "João Espiga D'Almeida",
                "email": "",
                "morada": "",
                "phone": ""
            },
            {
                "id": "30",
                "name": "João Sanches",
                "email": "",
                "morada": "",
                "phone": ""
            },
            {
                "id": "29",
                "name": "Luis Cumbrera",
                "email": "",
                "morada": "",
                "phone": ""
            },
            {
                "id": "28",
                "name": "Ricardo Drago",
                "email": "",
                "morada": "",
                "phone": "0"
            },
            {
                "id": "27",
                "name": "Nuno Constantino",
                "email": "",
                "morada": "",
                "phone": "0"
            },
            {
                "id": "26",
                "name": "Ricardo Mota",
                "email": "",
                "morada": "",
                "phone": "0"
            },
            {
                "id": "25",
                "name": "Francis Lacour",
                "email": "",
                "morada": "",
                "phone": "0"
            },
            {
                "id": "24",
                "name": "Carlos Nóbrega",
                "email": "",
                "morada": "",
                "phone": "0"
            },
            {
                "id": "23",
                "name": "João Valle e Azevedo",
                "email": "",
                "morada": "",
                "phone": "0"
            },
            {
                "id": "22",
                "name": "Nuno Cabral",
                "email": "",
                "morada": "",
                "phone": "0"
            },
            {
                "id": "21",
                "name": "Marcelo Bittencourt",
                "email": "",
                "morada": "",
                "phone": "0"
            },
            {
                "id": "20",
                "name": "Jose Antonio Vargas Lleras",
                "email": "",
                "morada": "",
                "phone": "0"
            },
            {
                "id": "19",
                "name": "David Leigh-Howarth",
                "email": "",
                "morada": "",
                "phone": "0"
            },
            {
                "id": "18",
                "name": "Sandro Marcos",
                "email": "",
                "morada": "",
                "phone": "0"
            },
            {
                "id": "17",
                "name": "Rafael Paixão",
                "email": "",
                "morada": "",
                "phone": "0"
            },
            {
                "id": "16",
                "name": "Javier Sabater",
                "email": "",
                "morada": "",
                "phone": "0"
            },
            {
                "id": "15",
                "name": "Renato Ribeiro",
                "email": "",
                "morada": "",
                "phone": "0"
            },
            {
                "id": "14",
                "name": "Andre Porcaro",
                "email": "",
                "morada": "",
                "phone": "0"
            },
            {
                "id": "13",
                "name": "Maxime Senseby",
                "email": "",
                "morada": "",
                "phone": "0"
            },
            {
                "id": "12",
                "name": "Christophe Maincourt",
                "email": "",
                "morada": "",
                "phone": "0"
            },
            {
                "id": "11",
                "name": "Teun Hilte",
                "email": "",
                "morada": "",
                "phone": "0"
            },
            {
                "id": "9",
                "name": "Rosário",
                "email": "",
                "morada": "",
                "phone": "0"
            },
            {
                "id": "8",
                "name": "Rui Andrade",
                "email": "",
                "morada": "",
                "phone": "0"
            },
            {
                "id": "7",
                "name": "Frederic Corre",
                "email": "frederic.corre@axa-groupsolutions.com",
                "morada": "",
                "phone": "0"
            },
            {
                "id": "6",
                "name": "João Batalha",
                "email": "joao.batalha@gmail.com",
                "morada": "",
                "phone": "912202013"
            }
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
