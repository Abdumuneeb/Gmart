angular.module('vegetablesControllers', [])

.controller('vegetablesDataCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.vegetablesData = {};
    $http.get('/inventory-api/getVegetablesData').then((returnData) => {
        $scope.vegetablesData = returnData.data;
        $scope.images = ['image1.png', 'image2.jpg','image3.jpg','black-forest.jpg'];
    }).catch((err) => {
        console.log(err);
    });
}]);