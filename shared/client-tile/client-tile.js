app
    .directive('clientTile', function() {
        return {
            restrict: 'EA',
            scope: {
                client : '=', //contains all info about single message
                onPress : '&?'
            },
            templateUrl: 'shared/client-tile/client-tile.html',

            link : function (scope, element, attrs) {
                
                //Init attributes
                if (!attrs.onPress) {
                    scope.onPress = undefined;
                }               

                //Dismiss message
                scope.onPressMessageHandler = function(){
                    scope.onPress( { client : client } );
                } 

            }
        };
    });