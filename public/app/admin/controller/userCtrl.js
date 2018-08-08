angular.module('userControllers',[])
.controller('regCtrl',function($http){
this.regUser= function(regData){
    console.log('form submitted ');
    console.log(this.regData);
    $http.post('/inventory-api/inventory',this.regData).then((result) => {
        console.log(result);
    }).catch((err) => {
        console.log(err);
    });
};
})

.controller('quantityctrl',function($scope, $window){
var quantities=[ 
    {box:0},

 ];

 $scope.breadId = '5b52f19e3ec8f40c14373caf';
 $scope.cookiesId = '5b52f19e3ec8f40c1437311111';
 $scope.cupCakesId = '5b52f19e3ec8f40c14373caf';
 $scope.biscuitsId = '5b52f19e3ec8f40c14373caf';
 $scope.gulabJamunId = '5b52f19e3ec8f40c14373caf';
 $scope.rasgullayId = '5b52f19e3ec8f40c14373caf';
 $scope.khanPuriPairayId = '5b52f19e3ec8f40c14373caf';
 $scope.khoyaBarfiId = '5b52f19e3ec8f40c14373caf';
 $scope.pinAppleCakeId = '5b52f19e3ec8f40c14373caf';
 $scope.blackForestId = '5b52f19e3ec8f40c14373caf';
 $scope.fruitCakeId = '5b52f19e3ec8f40c14373caf';
 $scope.iceCreamCakeId = '5b52f19e3ec8f40c14373caf';
 
 $scope.quantities=quantities;
 $scope.incrementLikes=function(quantity){
     quantity.box++;
 }

 
 $scope.decrementLikes=function(quantity){
     quantity.box--;
 }
 $scope.itemAddToCart=function(itemId, itemQuantity){

    var itemToCart = {
        itemId: itemId,
        itemQuantity: itemQuantity
    };

console.log(itemToCart);

$window.localStorage.setItem('itemDetails', itemToCart);


console.log($window.localStorage.getItem('itemDetails.itemId'));


 }
});




