var mongoose = require('mongoose');
var Customer = mongoose.model('customers');
module.exports = (function(){
	return{
		index:function(req,res){
			Customer.find({},function(err,output){
				if(err){
					console.log(err);
				}else{
					res.json(output);
				}
			})
		},
		add:function(req,res){
			var customer = new Customer({name:req.params.name,created_at:Date()});
			customer.save(function(err,output){
				if(err){
					console.log(err);
				}else{
					console.log('add successfully');
					res.json(output);
				}
			})
		},
		remove:function(req,res){
			Customer.remove({_id:req.params.id},function(err,status){
				if(err){
					console.log(err);
				}else{
					console.log('remove successfully');
					res.json({status:'successful'});
				}
			})
		}
	}
})()