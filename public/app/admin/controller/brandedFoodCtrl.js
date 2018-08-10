angular.module('brandedFoodControllers', [])

.controller('brandedDataCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.brandedData = {};
    $http.get('/inventory-api/getBrandedData').then((returnData) => {
        $scope.brandedData = returnData.data;
        $scope.images = ['goolden.jpg', 'ketchup.jpg','nido.jpg','nesvita.jpg','milo.jpg','Nutella-750g.jpg','pringles.jpg','red-bull.jpg','knour-soup1.png','knour-soup2.jpg','knour-soup4.jpg','knour-soup5.jpg'];
    }).catch((err) => {
        console.log(err);
    });

}]);