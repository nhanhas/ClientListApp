app
    .directive('commentTile', function() {
        return {
            restrict: 'EA',
            scope: {
                comment : '=' //contains all info about single message
            },
            templateUrl: 'shared/comment-tile/comment-tile.html',

            link : function (scope, element, attrs) {
                
              

            }
        };
    });