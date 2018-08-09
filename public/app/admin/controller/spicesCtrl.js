angular.module('spicesControllers', [])

.controller('spicesDataCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.spicesData = {};
    $http.get('/inventory-api/getSpicesData').then((returnData) => {
        $scope.spicesData = returnData.data;
        $scope.images = ['almond.jpg', 'anise.jpg','annotto.jpg','arrowroot.jpg','black.jpg','bonito.jpg','blackpepper.jpg','cuman.jpg','curing.jpg','dill.jpg','koshar.jpg','lemongrass.jpg'];
    }).catch((err) => {
        console.log(err);
    });
}]);