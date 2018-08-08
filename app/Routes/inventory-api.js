var Inventory = require('../model/inventory');

module.exports = function(router){

 router.post('/inventory', function (req, res) {
        var inventory = new Inventory();
        inventory.ProductType = req.body.ProductType;
        inventory.ItemName = req.body.itemName;
        inventory.Price = req.body.price;
        inventory.Quantity = req.body.quantity;
        inventory.Weight = req.body.weight;
        inventory.save().then((result) => {
            res.json(result);
        }, (err) => {
            res.json(err); 
        });
    });

    router.get('/getKitchenData', function(req, res) {
        Inventory.find({ProductType: 'kitchen'}).exec().then((data) => {
            res.json(data);
        }).catch((err) => {
            res.json(err);
        });
    });
    router.get('/getSpicesData', function(req, res) {
        Inventory.find({ProductType : 'spice'}).exec().then((data) => {
            res.json(data);
        }).catch((err) => {
            res.json(err);
        });
    });
    router.get('/getBrandedData', function(req, res) {
        Inventory.find({ProductType : 'brandedfood'}).exec().then((data) => {
            res.json(data);
        }).catch((err) => {
            res.json(err);
        });
    });
    router.get('/getVegetablesData', function(req, res) {
        Inventory.find({ProductType : 'vegetables'}).exec().then((data) => {
            res.json(data);
        }).catch((err) => {
            res.json(err);
        });
    });
    router.get('/getFruitData', function(req, res) {
        Inventory.find({ProductType : 'fruit'}).exec().then((data) => {
            res.json(data);
        }).catch((err) => {
            res.json(err);
        });
    });
    router.get('/getFrozanData', function(req, res) {
        Inventory.find({ProductType : 'frozanfood'}).exec().then((data) => {
            res.json(data);
        }).catch((err) => {
            res.json(err);
        });
    });
    router.get('/getBeveragesData', function(req, res) {
        Inventory.find({ProductType : 'beverages'}).exec().then((data) => {
            res.json(data);
        }).catch((err) => {
            res.json(err);
        });
    });
    router.get('/getBakeryData', function(req, res) {
        Inventory.find({ProductType : 'bakery'}).exec().then((data) => {
            res.json(data);
        }).catch((err) => {
            res.json(err);
        });
    });
    return router;
}