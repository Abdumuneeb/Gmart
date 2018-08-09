angular.module('kitchenControllers', [])

.controller('kitchenDataCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.kitchenData = {};
    $http.get('/inventory-api/getKitchenData').then((returnData) => {
        $scope.kitchenData = returnData.data;
        $scope.images = ['dettol.jpg', 'handwash.jpg','Kitchen-gel.jpg','lifeboy.jpg','rose.jpg','scotch.jpg','steel.png','vim.jpg'];
    }).catch((err) => {
        console.log(err);
    });
}]);