angular.module('spicesControllers', [])

.controller('spicesDataCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.spicesData = {};
    $http.get('/inventory-api/getSpicesData').then((returnData) => {
        $scope.spicesData = returnData.data;
        $scope.images = ['image1.png', 'image2.jpg','image3.jpg','black-forest.jpg'];
    }).catch((err) => {
        console.log(err);
    });
}]);