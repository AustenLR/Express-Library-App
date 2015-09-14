var express = require('express'),
  app = express(),
  bodyParser = require("body-parser");
  methodOverride = require('method-override');

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true})); 
app.use(methodOverride('_method'));

var movies = [];
var counter = 0;
var i;

app.get('/',function(req,res){
  res.render('index', {movies:movies});
});

app.get('/movies/new',function(req,res){
  res.render('new');
});

app.post('/movies', function(req,res){
  var title = req.body['title'];
  var genre = req.body['genre'];
  var year = req.body['year'];
  var id = counter;
  var movie = {
    title : title,
    genre : genre,
    year : year,
    id : id
  };
  movies.push(movie);
  counter++;
  res.redirect('/');
});

app.get('/movies/:id/edit',function(req,res){
  var clickedID = parseInt(req.params.id);
  movies.forEach(function(el){
    if (el.id === clickedID){
      var clickedMovie = el;
    }
    if (!clickedMovie){
      res.render('404');
    }
    res.render('edit',{movie: clickedMovie});
  });
  
});

app.put('/movies/:id',function(req,res){
  movies.forEach(function(el){
    if (el.id === parseInt(req.params.id)){
      el.title = req.body.title;
      el.year = req.body.year;
      el.genre = req.body.genre;
      var found = 'yes';
    }
    if (!found){
      res.render('404');
    }
    // var filtered = movies.filter(function(el){
    //   if (el.id === parseInt(req.params.id)) return el; 
    // });
    // console.log(filtered);
    // if (filtered.length === 0){
    //   res.render('404');
    // }
  });
  res.redirect('/');
});

app.get('/movies/:id',function(req,res){
  movies.forEach(function (el){
    if (el.id === Number(req.params.id)){
      i = el;
    }
  });
  res.render('indiv',{movie: i});
});

app.delete('/movies/:id',function(req,res){
  movies.forEach(function (el,index){
    if (el.id === parseInt(req.params.id)){
     movies.splice(index,1);
    }
  });
  res.redirect('/');
});

app.listen(3000, function (){
  console.log('Server running on port 3000');
});
