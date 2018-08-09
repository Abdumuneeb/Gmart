angular.module('fruitControllers', [])

.controller('fruitDataCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.fruitData = {};
    $http.get('/inventory-api/getFruitData').then((returnData) => {
        $scope.fruitData = returnData.data;
        $scope.images = ['grapes.jpg', 'apple.jpg','banana.jpg','papaya.jpg','mango.jpg','lime.jpg','strawberry.jpg','orange.jpg','pineapple.jpg','peach.jpg','blueberries.jpg','Pomegranate.jpg','cherry.jpg'];
    }).catch((err) => {
        console.log(err);
    });
}]);