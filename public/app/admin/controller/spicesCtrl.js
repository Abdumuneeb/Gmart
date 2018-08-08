angular.module('spicesControllers', [])

.controller('spicesDataCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.kitchenData = {};
    $http.get('/inventory-api/getKitchenData').then((returnData) => {
        $scope.kitchenData = returnData.data;
        $scope.images = ['image1.png', 'image2.jpg','image3.jpg','black-forest.jpg'];
    }).catch((err) => {
        console.log(err);
    });


}]);