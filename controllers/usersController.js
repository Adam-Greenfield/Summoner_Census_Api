var User = require("../models/user")

function usersShow(req, res) {
  User.findById(req.params.id, function(err, user){
    if (err) return res.status(404).json({message: 'Something went wrong.'});
    res.status(200).json({ user: user });
  })
}

module.exports = {
  usersShow: usersShow
}