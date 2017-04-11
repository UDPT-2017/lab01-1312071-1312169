var pg = require('pg');
var connect = "postgres://postgres:postgres@localhost:5432/bt01";
var bodyParser = require('body-parser');

var imagesController = {
  showImages: function(req, res){
    var album_id = req.params.id;
    pg.connect(connect, function(err, client, done){
      client.query("SELECT i.*, a.author FROM images i join albums a on i.album_id = a.id WHERE album_id = $1", [album_id], function(err, result){
        res.render('image', {images: result.rows});
      });
    });
  }
}

module.exports = imagesController;
