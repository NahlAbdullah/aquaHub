var searchResp=require('../../staticFiles/searchRes');
var bookResponse=require('../../staticFiles/bookResponse');
exports.search=function(req,res,callback){
	console.log(searchResp);
	callback(null,searchResp.response)
}
exports.book=function(req,res,callback){
	callback(null,bookResponse.response())
}