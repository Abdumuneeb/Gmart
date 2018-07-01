var Inventory = require('../model/inventory');

module.exports = function(router){

 router.post('/inventory', function (req, res) {
        var inventory = new Inventory();
        inventory.ItemName = req.body.ItemName;
        inventory.Price = req.body.Price;
        inventory.Quantity = req.body.Quantity;
        inventory.Weight = req.body.Weight;
        inventory.save().then((result) => {// promises
            res.send(result);
        }, (err) => {
            res.send(err);
        });
    });
    return router;
}