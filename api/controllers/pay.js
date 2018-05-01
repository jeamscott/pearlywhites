var mongoose = require('mongoose');
var User = mongoose.model('User');
var Billing = mongoose.model('Billing');

 /*

var old_balance = function(req, res) {
  if (!req.payload._id) {
    res.status(401).json({
      "message" : "UnauthorizedError: private profile"
    });
  } else {
    
    User
      .findById(req.payload._id)
      .exec(function(err, user) {
          if(err) {
              res.status(401).json({"message" : "UnauthorizedError: no matching record"});
              return;
          }
          Billing.findOne({'user_name':user.email},
            'balance_due',
            function(err, current_balance) {
                if(err) {
                    res.status(404).json({"message" : "No record found"});
                    return;
                }
                res.status(200).json(current_balance);
          })
      });
  }
  
};

 */

module.exports.payBill = function(req, res) {
  if (!req.payload._id) {
    res.status(401).json({
      "message" : "UnauthorizedError: private profile"
    });
  } else {
    
    User
      .findById(req.payload._id)
      .exec(function(err, user) {
          if(err) {
              res.status(401).json({"message" : "UnauthorizedError: no matching record"});
              return;
          }
          console.log(user.name)
          Billing
            .findOne({'user_name':user.email})
            .exec(function(err, math) {
                if(err) {
                    res.status(404).json({"message" : "No record found"});
                    return;
                }
                new_balance = (math.balance_due-req.body.balance_due)

                Billing.findOneAndUpdate(
                  {
                    'user_name':user.email},
                  {
                    $set: { 'balance_due': (new_balance)},
                  },
                  {
                    new: true
                  },
                    function(err, billing) {
                        if(err) {
                            res.status(404).json({"message" : "No record found"});
                            return;
                        }
                    res.status(200).json(billing);
                      })
          })
      });
  }
  
};

