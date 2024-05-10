var Prod= require('../models/product');
var mongoose= require('mongoose');
mongoose.connect('mongodb://localhost/pindB', function(err,db){
    if (!err){
        console.log('Connected to /pindB!');
    } else{
        console.dir(err); //failed to connect
    }
});

var Products= [new Prod({
	imgurl: './public/images/as.jpg',
	title: 'As',
	type: 'Veg Main Course',
	price: 220
}),
new Prod({
	imgurl: './public/images/1.jpg',
	title: 'Pendir',
	type: 'Non-veg Main Course',
	price: 380
}),
new Prod({
	imgurl: './public/images/5.jpg',
	title: 'Toyuq',
	type: 'Non-veg Snacks',
	price: 260
}),
new Prod({
	imgurl: './public/images/3.jpg',
	title: ' Tike',
	type: 'Veg Snacks',
	price: 200
}),
new Prod({
	imgurl: './public/images/7.jpg',
	title: 'plov',
	type: 'Non-veg Snacks',
	price: 280
}),
new Prod({
	imgurl: './public/images/9.jpg',
	title: 'kete',
	type: 'Breads',
	price: 8
}),
new Prod({
	imgurl: './public/images/14.jpg',
	title: 'paxlava',
	type: 'Dessert',
	price: 20
}),
new Prod({
	imgurl: './public/images/13.jpg',
	title: 'Pqutab',
	type: 'Veg Snacks',
	price: 5
})];
var done=0;
for(var i=0;i<Products.length;i++)
{
	console.log(Products[i]);
	Products[i].save(function(err,result){
		console.log(result);
		done++;
		if(done=== Products.length)
			exit();
	});
}
function exit(){
	mongoose.disconnect();
}