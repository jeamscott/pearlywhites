var mongoose = require('mongoose');
var User = mongoose.model('User');
var Supplies = mongoose.model('Supplies')

module.exports.suppliesRead = function(req, res) {

  if (!req.payload._id) {
    res.status(401).json({
      "message" : "UnauthorizedError: private profile"
    });
  } else {
    Supplies
      .findById(req.body.item_name)
      .exec(function(err, supplies) {
        res.status(200).json(supplies);
      });
  }
  
};
// /* Experimental
module.exports.suppliesWrite = function(req, res) {  
  if (!req.payload._id) {
    res.status(401).json({
      "message" : "UnauthorizedError: private profile"
    });
  } else {
    User
      .findByIdAndUpdate(
          
            req.payload._id
          ,
          {
            $set: { 'name': req.body.name},
          },
          {
            new: true
          },
            function(err, patient) {
                if(err) {
                    res.status(404).json({"message" : "No record found"});
                    return;
                }
                res.status(200).json(patient);
          })      
  }
};
// */