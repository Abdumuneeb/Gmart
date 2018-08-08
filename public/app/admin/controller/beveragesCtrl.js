angular.module('beveragesControllers', [])

.controller('beveragesDataCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.beveragesData = {};
    $http.get('/inventory-api/getBeveragesData').then((returnData) => {
        $scope.beveragesData = returnData.data;
        $scope.images = ['image1.png', 'image2.jpg','image3.jpg','black-forest.jpg'];
    }).catch((err) => {
        console.log(err);
    });
}]);