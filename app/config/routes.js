var configRoutes = function(app){
  app.get('/', function(req, res){
    res.render('layout');
  });
};

module.exports = configRoutes;
