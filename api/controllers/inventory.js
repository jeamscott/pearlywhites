var mongoose = require('mongoose');
var User = mongoose.model('User');
var Inventory = mongoose.model('Inventory');

module.exports.getAll = function(req, res) {
  const _inventoryProjection = "item_name quantity"
  if (!req.payload._id) {
    res.status(401).json({
      "message" : "UnauthorizedError: private profile"
    });
  } else {
    
    Inventory
      .find({}, _inventoryProjection, (err, Inventory) => {
        let inventoryArr = [];
        if (err) {
          return res.status(500).send({message: err.message});
        }
        if (inventory) {
          inventory.forEach(inventory => {
            inventoryArr.push(inventory);
          });
        }
        
        res.send(inventoryArr);
      });
  }
  
};

module.exports.getInventory = function(req, res) {

  Inventory.findOne({'user_name':req.params.id},
  'id_number item_name quantity visit_history user_name',
    function(err, inventory) {
          if(err) {
              res.status(404).json({"message" : "No record found"});
              return;
          }
          res.status(200).json(inventory);
    })
}