const express  = require('express');
const http = require('http');
const path = require('path');
const app = express();
console.log('loading express ');

const port = 4201;
app.set('views', 'app/views');
app.set('view engine', 'ejs');

app.use(express.static(__dirname + 'dist/site-bgsl-admin'));
app.use('/', express.static('dist/site-bgsl-admin'));
app.get('/', function (req, res) {
    console.log("entro admin 1" +__dirname + '/dist/site-bgsl-admin/index.ejs');    
    res.render(__dirname + '/dist/site-bgsl-admin/index.ejs');
});
require('./app/routes/admin.js')(app); 
require('./app/routes/login.js')(app); 
app.get('*',function (req, res) {
    res.redirect('/');
});

app.listen(port);
console.log('Server running on ' + port);