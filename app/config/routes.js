var albumsController = require('../controllers/albumsController');
var imagesController = require('../controllers/imagesController');
var blogsController = require('../controllers/blogsController');
var sessionsController = require('../controllers/sessionsController');
var usersController = require('../controllers/usersController');

var configRoutes = function(app){
  app.get('/', blogsController.myblog);
  app.get('/albums', albumsController.getAllAlbums);
  app.get('/albums/:id', imagesController.showImages);
  app.get('/images/:id', imagesController.showImage);
  app.get('/image/:id', imagesController.getImage);
  app.get('/blogs', blogsController.getlist);
  app.get('/blog/:id', blogsController.getblog);
  app.get('/blogs/:id', blogsController.setview);
  app.get('/login', function(req, res){
    res.render('login');
  })
  app.post('/login', sessionsController.login);
  app.get('/signup', function(req, res){
    res.render('signup');
  })
  app.post('/signup', usersController.signup);
  app.get('/logout', sessionsController.logout);
};

module.exports = configRoutes;
