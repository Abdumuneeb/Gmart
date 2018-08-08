angular.module('frozanControllers', [])

.controller('frozanDataCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.frozanData = {};
    $http.get('/inventory-api/getFrozanData').then((returnData) => {
        $scope.frozanData = returnData.data;
        $scope.images = ['image1.png', 'image2.jpg','image3.jpg','black-forest.jpg'];
    }).catch((err) => {
        console.log(err);
    });
}]);