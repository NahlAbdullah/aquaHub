var mongoose=require('mongoose');
var Schema = mongoose.Schema;
var MarkUpSchema=new Schema({
	type:{type:String,default:'percentage'},
	value:{type:Number,default:10}

});
module.exports = mongoose.model("MarkUp", MarkUpSchema,'MARKUP');