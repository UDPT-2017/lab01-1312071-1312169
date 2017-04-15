var pg = require('pg');
var connect = "postgres://postgres:postgres@localhost:5432/bt01";
var bodyParser = require('body-parser');

var blogsController = {
  getlist: function(req, res){
     try{
      console.log("get list");
      pg.connect(connect, function(err, client, done){
        client.query("SELECT b.*, u.name FROM blog b join users u on b.user_id = u.id", function(err, result){
          res.render('blog', {blogs: result.rows});

        });
      })
    }catch(e){

    }
  },
  getblog: function(req, res){
    try{
      var id = req.params.id;
      pg.connect(connect, function(err, client, done){
        client.query("SELECT * FROM blog WHERE id = $1",[id], function(err, result){
          res.render('showBlog', {blog: result.rows[0]});
        });
      })
    }catch(e){

    }
  },
  setview: function(req, res){
    try{
      var id = req.params.id;
      pg.connect(connect, function(err, client, done){
        client.query("SELECT * FROM blog WHERE id = $1",[id], function(err, result){
          client.query("UPDATE blog SET view = view + 1 WHERE id = $1", [id]);
          res.status(200).send('Success');
        });
      })
    }catch(e){

    }
  },
  myblog: function(req, res){
    try{
      console.log("home: "+ current_user.name)
      if(current_user ){
        pg.connect(connect, function(err, client, done){
          client.query("SELECT * FROM blog WHERE user_id = $1",[current_user.id], function(err, result){
          res.render('home', {myblog: result.rows});
          });
        })
      }
      else{
        res.render('home');
      }

    }catch(e){
      res.render('home');
    }
  }
}

module.exports = blogsController;
