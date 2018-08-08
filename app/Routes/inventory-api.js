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
        Inventory.find({}).exec().then((data) => {
            res.json(data);
        }).catch((err) => {
            res.json(err);
        });
    });
    return router;
}