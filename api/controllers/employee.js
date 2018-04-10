var mongoose = require('mongoose');
var User = mongoose.model('User');
var Employee = mongoose.model('Employee');

module.exports.employeeRead = function(req, res) {
  
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
          Employee.findOne({'user_name':user.email},
            'user_name employee_status',
                function(err, employee) {
                if(err) {
                    res.status(404).json({"message" : "No record found"});
                    return;
                }
                res.status(200).json(employee);
          })
      });
  }
  
};


module.exports.employeeWrite = function(req, res) {  
  if (!req.payload._id) {
    res.status(401).json({
      "message" : "UnauthorizedError: private profile"
    });
  } else {
    User
      .findById(req.payload._id)
      .exec(function(err, user) {
          if(err) {
            console.error(err);
              res.status(401).json({"message" : "UnauthorizedError: no matching record"});
              return;
          }
          Employee.findOneAndUpdate(
          {
            'user_name':user.email},
          {
            $set: { 'employee_status': req.body.employee_status },
          },
          {
            new: true
          },
            function(err, employee) {
                if(err) {
                    res.status(404).json({"message" : "No record found"});
                    return;
                }
                res.status(200).json(employee);
          })
      });
  }
};
