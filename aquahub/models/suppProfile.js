var mongoose=require('mongoose');
var location=require('./location')
var product=require('./product')
var Schema = mongoose.Schema;
var ProfileSchema=new Schema({
	name:{type:String},
	active:{type:Boolean,default:true},
	_location:{type: Schema.ObjectId, ref: 'SuppLocation'},
	_products:[{type: Schema.ObjectId, ref: 'product'}]

});
module.exports = mongoose.model("SuppProfile", ProfileSchema,'SUPP_PROFILE');