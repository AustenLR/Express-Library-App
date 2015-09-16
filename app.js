var express = require('express'),
  app = express(),
  bodyParser = require("body-parser");
  methodOverride = require('method-override');

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true})); 
app.use(methodOverride('_method'));

db = require('./models');

app.get('/moives', function(req,res){
  res.redirect('/');
});

app.get('/',function(req,res){
  db.Movie.find({}, function(err,movies){
    res.render('index', {movies: movies});
  });
});


app.get('/movies/new',function(req,res){
  res.render('new');
});


app.post('/movies', function(req,res){
  db.Movie.create(req.body, function(){
    res.redirect('/');
  });
});



app.get('/movies/:id/edit',function(req,res){
  db.Movie.findById(req.params.id, function(err, anotherMovie){
    res.render('edit', {movie: anotherMovie});
  });
});



app.put('/movies/:id',function(req,res){
  db.Movie.findByIdAndUpdate(req.params.id, req.body, function(){
    res.redirect('/');
  });
});

//   movies.forEach(function(el){
//     if (el.id === parseInt(req.params.id)){
//       el.title = req.body.title;
//       el.year = req.body.year;
//       el.genre = req.body.genre;
//       var found = 'yes';
//     }
//     if (!found){
//       res.render('404');
//     }
//   });
//   res.redirect('/');
// });

app.get('/movies/:id',function(req,res){
  db.Movie.findById(req.params.id, function(err, clicked){
    res.render('indiv',{movie: clicked});    
  });
});

//   movies.forEach(function (el){
//     if (el.id === Number(req.params.id)){
//       i = el;
//     }
//   });
//   res.render('indiv',{movie: i});
// });



app.delete('/movies/:id',function(req,res){
  db.Movie.findByIdAndRemove(req.params.id, function(){
    res.redirect('/');
  });
});

  // movies.forEach(function (el,index){
  //   if (el.id === parseInt(req.params.id)){
  //    movies.splice(index,1);
  //   }
  // });
  // res.redirect('/');
// });

app.listen(3000, function (){
  console.log('Server running on port 3000');
});
