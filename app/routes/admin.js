
module.exports = function(app){
	app.get('/', function(req,res){
        console.log("entro home");
        res.render('admin.ejs');
    });	
}