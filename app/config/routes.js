var albumsController = require('../controllers/albumsController');
var imagesController = require('../controllers/imagesController');

var configRoutes = function(app){
  app.get('/', function(req, res){
    res.render('layout');
  });
  app.get('/albums', albumsController.getAllAlbums);
  app.get('/albums/:id', imagesController.showImages);
  app.get('/images/:id', imagesController.showImage);
  app.get('/image/:id', imagesController.getImage);
};

module.exports = configRoutes;
