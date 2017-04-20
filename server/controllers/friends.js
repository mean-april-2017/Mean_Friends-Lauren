console.log("/server/controllers/friends.js");

var mongoose = require("mongoose");
var Friend = mongoose.model("Friend");

module.exports.index = function(req, res){
  Friend.find({}, function (err, friends){
    if (err){
      console.log(err);
    } else {
      res.json(friends);
    }
  });
}
module.exports.show = function(req, res){
  Friend.findById(req.params.id, function (err, friend){
    if (err){
      console.log(err);
    } else {
      res.json(friend);
    }
  });
}

module.exports.create = function (req, res){
  var friend = new Friend({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    birthday: req.body.birthday
  });
  friend.save(function (err, friend){
    if (err){
      console.log(err);
    } else {
      res.json(friend);
    }
  });
}

module.exports.update = function (req, res){
  Friend.findById(req.params.id, function (err, friend){
    if (err){
      console.log(err);
    } else {
      console.log(req.body);
      friend.first_name = req.body.first_name;
      friend.last_name = req.body.last_name;
      friend.birthday = req.body.birthday;
      friend.save(function (err, friend){
        if (err){
          console.log(err);
        } else {
          res.json(friend);
        }
      });
    }
  });
}

module.exports.delete = function (req, res){
  Friend.remove({ _id: req.params.id }, function(err) {
    if (err) {
      console.log(err);
    } else {
      res.json('');
    }
  });
}
