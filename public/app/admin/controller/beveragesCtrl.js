angular.module('beveragesControllers', [])

.controller('beveragesDataCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.beveragesData = {};
    $http.get('/inventory-api/getBeveragesData').then((returnData) => {
        $scope.beveragesData = returnData.data;
        $scope.images = ['seven.jpg', 'aqua.jpg','bourn.jpg','diet.jpg','due.jpg','pep.jpg','sprite.jpg','oval.jpg','lemon.jpg','tang.jpg','slice.jpg','sting.jpg'];
    }).catch((err) => {
        console.log(err);
    });
}]);