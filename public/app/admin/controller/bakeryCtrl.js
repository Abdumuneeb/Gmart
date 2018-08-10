angular.module('bakeryControllers', [])

.controller('bakeryDataCtrl', ['$scope', '$rootScope', '$http', function($scope, $rootScope, $http) {
    $scope.bakeryData = {};
    $http.get('/inventory-api/getBakeryData').then((returnData) => {
        $rootScope.bakeryData = returnData.data;
        $scope.bakeryData = returnData.data;
        $scope.images = ['black-forest.jpg', 'bread.png','choclate-cup-cakes.jpg','cookies.jpg','fruit-cake.jpg','gulab-jamun.jpg','ice-cream-cake.jpg','khanpuri-pairay.jpg','Khoya-Barfi.jpg','pinapple-cake.jpg','rasgullay.jpg','biscuits.jpg'];
    }).catch((err) => {
        console.log(err);
    });
    
}]);