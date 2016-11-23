var mongoose=require('mongoose');
var company=require('./company');
var markup=require('./markup')
var Schema = mongoose.Schema;
var productSchema=new Schema({
	production_id:{type:String},
	location_id:{type:String},
	name:{type:String},
	refill_price:{type:Number},
	bottle_price:{type:Number},
	volume_ltr:{type:Number},
	service_fee:{type:Number},
	timeStamp:{type:Date},
	company:{type: Schema.ObjectId, ref: 'company'},
	_markUp:{type: Schema.ObjectId, ref: 'MarkUp'}
});
module.exports = mongoose.model("product", productSchema,'PRODUCT');
