angular.module('bakeryControllers', [])

.controller('bakeryDataCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.bakeryData = {};
    $http.get('/inventory-api/getBakeryData').then((returnData) => {
        $scope.bakeryData = returnData.data;
        $scope.images = ['image1.png', 'image2.jpg','image3.jpg','black-forest.jpg'];
    }).catch((err) => {
        console.log(err);
    });
}]);