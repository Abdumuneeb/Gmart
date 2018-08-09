angular.module('vegetablesControllers', [])

.controller('vegetablesDataCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.vegetablesData = {};
    $http.get('/inventory-api/getVegetablesData').then((returnData) => {
        $scope.vegetablesData = returnData.data;
        $scope.images = ['potatoes.jpg', 'tomatoes.jpeg','cucumber.png','carrots.jpg','ginger.jpg','garlic.jpg','marrow.jpg','brinjal.jpg','lady.png','pumpkin.jpg','turnip.jpg','lauki.jpg','ghobi.jpg','shimla.jpg','lemon.jpg'];
    }).catch((err) => {
        console.log(err);
    });
}]);