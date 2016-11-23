var productModel=require('../models/product')
var companyModel=require('../models/company')
var randomstring = require("randomstring");
var profileModel=require('../models/suppProfile');
var locationModel=require('../models/location');
var markupModel=require('../models/markup');
var neighborhoodsModel=require('../models/neighborhoods')
var restaurantsModel=require('../models/restaurants')
exports.insertProduct=function(req,res){
	var product=new productModel({
		production_id:randomstring.generate({ length: 6,}),
		location_id:'50123',
		name:'kinley',
		refill_price:20,
		bottle_price:10,
		volume_ltr:20,
		service_fee:5,
		timeStamp:new Date()
		})	
	product.save(function(err){
		res.send('Saved');
	});
};
/*exports.findProduct=function(req,res){
	productModel.find(function(err,doc){
		res.send(doc);
	});
};*/
exports.findProduct=function(req,res){
	productModel.find().populate('company').exec(function(err,doc){
if(err)res.send(err);
		res.send(doc)
	})
	
};
exports.addCompany=function(req,res){
	var company=new companyModel({
		name:"MAHl",
	iso:"1234uiii",
	address:{
		city:'HYDERabad',
		zip:'1234'
	}
	});

	company.save(function(err){
		res.send('saved');
	})
}
exports.addProduct=function(req,res){
	//get company
	companyModel.findOne({iso:'BET67098'},function(err,doc){
		console.log('doc-id',doc);
		var product=new productModel({
		production_id:randomstring.generate({ length: 6,}),
		location_id:'50123',
		name:'kinley',
		refill_price:20,
		bottle_price:10,
		volume_ltr:20,
		service_fee:5,
		timeStamp:new Date(),
		company:doc._id
		})	
	product.save(function(err){
		res.send('Saved');
	});
	})

};	
exports.addProfile=function(req,res){
	profile=new profileModel({
		name:'profile1',
		active:true,
	});
	location=new locationModel({
		name:'RajBhavan',
		zip:'11247',
		lat:'25.52',
		long:'63.24'
	});
	location.geometry.coordinates[0]=-73.93414657;
	location.geometry.coordinates[1]=40.82302903;
	companyModel.findOne({iso:'BET67098'},function(err,doc){
		console.log('doc-id',doc);
		var markUp=new markupModel();
		markUp.save(function(err,markup){
			var kinley=new productModel({
			production_id:randomstring.generate({ length: 6,}),
			location_id:'50123',
			name:'kinley',
			refill_price:20,
			bottle_price:10,
			volume_ltr:20,
			service_fee:5,
			timeStamp:new Date(),
			company:doc._id,
			_markUp:markup._id
			})	;
			var bisleri=new productModel({
			production_id:randomstring.generate({ length: 6,}),
			location_id:'50123',
			name:'Bisleri',
			refill_price:20,
			bottle_price:10,
			volume_ltr:20,
			service_fee:5,
			timeStamp:new Date(),
			company:doc._id,
			_markUp:markup._id
			})	
			var pruductIds=[];
			kinley.save(function(err,kin){
			pruductIds.push(kin._id);
			bisleri.save(function(err,bis){
				pruductIds.push(bis._id);
				location.save(function(err,loc){
					console.log(pruductIds);
					profile._location=loc._id;
					profile._products=	pruductIds;
					profile.save(function(err,prof){
						if(err){
							res.send(err);
						}else{
							res.send(prof);
						}
					})			
				})
			});
		});
		});
	});

};
exports.findProducts=function(req,res){
	locationModel.findOne({zip:'11247'},function(err,location){
		console.log(location);
		profileModel.find({_location:location._id})
		.populate({path:'_products',
			populate:{path:'_markUp'}})
		.exec(function(err,profile){
			res.send(profile);
		})
	})	
}
exports.neighborhood=function(req,res){
	neighborhoodsModel.findOne({ geometry: { $geoIntersects: 
		{ $geometry: { type: "Point", coordinates: [ -73.93414657, 40.82302903 ] } } } },function(err,doc){
			res.send(doc);
		})
		
};
exports.restaurants=function(req,res){
	var neighborhood = neighborhoodsModel.findOne( { geometry: { $geoIntersects:
	 { $geometry: { type: "Point", coordinates: [ -73.93414657, 40.82302903 ] } } } },
	 function(err,neighborhood){
	 	console.log(neighborhood);
	 	restaurantsModel.find( { location: { $geoWithin: { $geometry: neighborhood.geometry } } },function(err,doc){
		console.log(err);
		res.send(doc.length);
})
	 } )


}

exports.location=function(req,res){
	/*locationModel.find({ geometry:
   { $geoWithin:
      { $centerSphere: [ [ -73.93414657, 40.82302903 ], 5 / 3963.2 ] } } },
      function(err,doc){
      	res.send(doc);
      })*/



//var METERS_PER_MILE = 1609.34

locationModel.find({ geometry: 
	{ $nearSphere: { $geometry: { type: "Point", coordinates: [ -73.93414657, 40.82302903 ] }, $maxDistance: 5 * 1000 } } },
	function(err,doc){
		res.send(doc);
	})




}