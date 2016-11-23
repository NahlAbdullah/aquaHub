var mongoose=require('mongoose');
var company=require('./company')
var Schema = mongoose.Schema;
var LocationSchema=new Schema({
	name:{type:String},
	zip:{type:String},
	lat:{type:Number},
	long:{type:Number},
	geometry:{
		coordinates:{type:Array},
		type:{type:String,default:'Point'}
	}

});
LocationSchema.index({"geometry":'2dsphere'});
module.exports = mongoose.model("SuppLocation", LocationSchema,'SUPP_LOCATION');