var albumsController = require('../controllers/albumsController');

var configRoutes = function(app){
  app.get('/', function(req, res){
    res.render('layout');
  });
  app.get('/albums', albumsController.getAllAlbums);
};

module.exports = configRoutes;
