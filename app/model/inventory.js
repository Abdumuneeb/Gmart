var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var InventorySchema = new Schema({
 ProductType:{type:String,lowercase:true,required:true},
ItemName:{type:String, lowercase:true, required:true, unique:true},
Price :{type:Number , required:true},
Quantity:{type:Number,required:true},
Weight:{type:Number,required:true},
}, { collection: 'inventory' });

module.exports=mongoose.model('inventory',InventorySchema);