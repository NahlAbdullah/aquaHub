var mongoose=require('mongoose');
var Schema = mongoose.Schema;
var restaurantsSchema=new Schema({
		name:{type:String},
		location:{coordinates:{type:Array}}
	});
restaurantsSchema.index({ "location" : "2dsphere"});
module.exports = mongoose.model("restaurants", restaurantsSchema,'restaurants');
