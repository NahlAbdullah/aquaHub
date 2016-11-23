var processor=require('../aqua_modules/aquaCan_module/aquaCanProcessor');
exports.search=function(req,res){
	processor.search(req,res,function(error,resObj){

			res.json(resObj);
		})
}
exports.book=function(req,res){
	processor.book(req,res,function(error,resObj){
		
			res.json(resObj);
		})
}