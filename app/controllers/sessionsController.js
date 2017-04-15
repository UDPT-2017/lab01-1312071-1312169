var pg = require('pg');
var connect = "postgres://postgres:postgres@localhost:5432/bt01";
var bodyParser = require('body-parser');
var passwordHash = require('password-hash');

var sessionsController = {
  login: function(req, res){
    var name = req.body.name;
    var pass = req.body.password;
    console.log(name);
    console.log(pass);
    current_user = {};
    var message = {};
    pg.connect(connect, function(err, client, done){
      client.query("SELECT * FROM users WHERE name = $1", [name], function(err, result){
        if(result.rowCount == 0){
          message.error = "Invalid email/password!";
          res.render('login', {message: message});
        }
        else{
          var kq = passwordHash.verify(pass, result.rows[0].password);

          if(kq == true)
          {
            message.success = "Login successfully!";
            current_user.id = result.rows[0].id;
            current_user.name = result.rows[0].name;
            res.redirect('/');//('home', {user: result.rows, message: message});
          }
          else
          {
            message.error = "Invalid password!";
           res.render('login', {message: message});
          }

        }
      })
    })
  },
  logout: function(req, res){
    message = {};
    current_user = null;
    message.success = "Log out successfully!";
    res.redirect('/');
  }
}

module.exports = sessionsController;
