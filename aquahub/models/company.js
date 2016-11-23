var mongoose=require('mongoose');
var Schema = mongoose.Schema;
var companySchema=new Schema({
	name:{type:String},
	iso:{type:String},
	address:{
		city:{type:String},
		zip:{type:String}
	}
});
module.exports = mongoose.model("company", companySchema,'COMPANY');
