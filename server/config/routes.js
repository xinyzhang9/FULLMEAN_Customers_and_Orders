var customers = require('./../controllers/customers.js');
var orders = require('./../controllers/orders.js');

module.exports = function(app){
	app.get('/customers',function(req,res){
		customers.index(req,res);
	});
	app.post('/addCustomer/:name',function(req,res){
		customers.add(req,res);
	});
	app.post('/removeCustomer/:id',function(req,res){
		customers.remove(req,res);
	});
	app.get('/orders',function(req,res){
		orders.index(req,res);
	});
	app.post('/makeOrder',function(req,res){
		orders.add(req,res);
	})
}