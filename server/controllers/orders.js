var mongoose = require('mongoose');
var Order = mongoose.model('orders');
module.exports = (function(){
	return{
		index: function(req,res){
			Order.find({},function(err,output){
				if(err){
					console.log(err);
				}else{
					res.json(output);
				}
			})
		},
		add: function(req,res){
			var order = new Order(
								{customer:req.body.customer,
									product:req.body.product,
									quantity:req.body.quantity,
									created_at:Date()
								});
			order.save(function(err,output){
				if(err){
					console.log(err);
				}else{
					console.log('add order successfully');
					res.json(output);
				}
			})
		},

	}
})()