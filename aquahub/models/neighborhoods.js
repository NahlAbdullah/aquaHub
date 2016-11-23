var mongoose=require('mongoose');
var Schema = mongoose.Schema;
var neighborhoodSchema=new Schema({
		name:{type:String},
		geometry:{coordinates:{type:Array}}
	});
neighborhoodSchema.index({ "geometry" : "2dsphere"});
module.exports = mongoose.model("neighborhoods", neighborhoodSchema,'neighborhoods');
