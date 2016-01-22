//model
var mongoose = require('mongoose');

var OrderSchema = new mongoose.Schema({
	customer:String,
	product:String,
	quantity:Number,
	created_at:Date,

});

mongoose.model('orders',OrderSchema);