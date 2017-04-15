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
  },
  showImage: function(req, res){
    var image_id = req.params.id;
    console.log("image_id: " + image_id);
    pg.connect(connect, function(err, client, done){
      client.query("SELECT * FROM images WHERE id = $1", [image_id], function(err, result){
        client.query("UPDATE images SET view = view + 1 WHERE id = $1", [image_id]);
        client.query("UPDATE albums SET total_view = total_view + 1 WHERE id = $1", [result.rows[0].album_id]);
        res.status(200).send('Success');
      })
    })
  },
  getImage: function(req, res){
    var image_id = req.params.id;
    console.log("get image_id: " + image_id);
    pg.connect(connect, function(err, client, done){
      client.query("SELECT * FROM images WHERE id = $1", [image_id], function(err, result){
        res.render('showImage', {image: result.rows[0]});
      })
    })
  }
}

module.exports = imagesController;
