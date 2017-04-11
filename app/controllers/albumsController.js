var pg = require('pg');
var connect = "postgres://postgres:postgres@localhost:5432/bt01";
var bodyParser = require('body-parser');

var albumsController = {
  getAllAlbums: function(req, res){

    try{
      pg.connect(connect, function(err, client, done){
        client.query("SELECT a.id, a.image, a.total_view, u.name FROM albums a join users u on u.id = user_id", function(err, result){
          res.render('albums', {albums: result.rows});

        });
      })
    }catch(e){

    }
  }
};
module.exports = albumsController;
