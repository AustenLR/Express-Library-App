var express = require('express'),
  app = express(),
  bodyParser = require("body-parser");
  methodOverride = require('method-override');

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true})); 
app.use(methodOverride('_method'));

var movies = [];

app.get('/',function(req,res){
  res.render('index', {})
})

app.get('/movies/new',function(req,res){
  res.render('new')
})

app.listen(3000, function (){
  console.log('Server running on port 3000');
});
