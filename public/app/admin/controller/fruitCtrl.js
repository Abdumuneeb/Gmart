angular.module('fruitControllers', [])

.controller('fruitDataCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.fruitData = {};
    $http.get('/inventory-api/getFruitData').then((returnData) => {
        $scope.fruitData = returnData.data;
        $scope.images = ['image1.png', 'image2.jpg','image3.jpg','black-forest.jpg'];
    }).catch((err) => {
        console.log(err);
    });
}]);