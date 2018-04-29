var mongoose = require('mongoose');
var User = mongoose.model('User');
var Inventory = mongoose.model('Inventory')

module.exports.inventoryRead = function(req, res) {

  if (!req.payload._id) {
    res.status(401).json({
      "message" : "UnauthorizedError: private profile"
    });
  } else {
    Inventory
      .findById(req.body.item_name)
      .exec(function(err, Inventory) {
        res.status(200).json(inventory);
      });
  }
  
};
// /* Experimental
module.exports.inventoryWrite = function(req, res) {  
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