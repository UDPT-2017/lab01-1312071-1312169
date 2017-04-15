var pg = require('pg');
var connect = "postgres://postgres:postgres@localhost:5432/bt01";
var bodyParser = require('body-parser');
var passwordHash = require('password-hash');

var usersController = {
  signup: function(req, res){
    try{
    current_user = {};
    var name = req.body.name;
    var pass = req.body.password;
    var hashedPassword = passwordHash.generate(pass);
    var message = {};
    if (name && pass)
    {
      pg.connect(connect, function(err, client, done){
      client.query("INSERT INTO users(name, password) VALUES($1, $2)", [name, hashedPassword], function(err, result){
          if(typeof result == "undefined")
          {
            message.error = "Name is available!";
            res.render('signup', {message: message});
          }
          else
          {
             client.query("INSERT INTO users(name, password) VALUES($1, $2)", [name, hashedPassword], function(err, result){
               message.success = "Signup successfully!";
            client.query("SELECT * FROM users WHERE name = $1", [name], function(err, result1){
            current_user.id = result1.rows[0].id;
            current_user.name = result1.rows[0].name;
            res.redirect('/');
            })
          })
          }
          })
    })


    }
    else
    {
      message.error = "Name and email can't blank";
      res.render('signup', {message: message});
    }

  }catch(err){
    var message ={};
    message.error = "Name and email can't blank";
    res.render('signup', {message: message});
  }

}
}

module.exports = usersController;
