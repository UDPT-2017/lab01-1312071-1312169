var aboutController = require('../controllers/aboutController');
var albumsController = require('../controllers/albumsController');
var imagesController = require('../controllers/imagesController');
var blogsController = require('../controllers/blogsController');

var configRoutes = function(app){
  app.get('/', function(req, res){
    res.render('layout');
  });
  app.get('/about', aboutController.index);
  app.get('/albums', albumsController.getAllAlbums);
  app.get('/albums/:id', imagesController.showImages);
  app.get('/images/:id', imagesController.showImage);
  app.get('/image/:id', imagesController.getImage);
  app.get('/blogs', blogsController.getlist);
  app.get('/blog/:id', blogsController.getblog);
  app.get('/blogs/:id', blogsController.setview);
};

module.exports = configRoutes;
