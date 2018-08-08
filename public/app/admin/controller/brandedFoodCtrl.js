angular.module('brandedFoodControllers', [])

.controller('brandedDataCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.brandedData = {};
    $http.get('/inventory-api/getBrandedData').then((returnData) => {
        $scope.brandedData = returnData.data;
        $scope.images = ['image1.png', 'image2.jpg','image3.jpg','black-forest.jpg'];
    }).catch((err) => {
        console.log(err);
    });
}]);