var mongoose = require('mongoose');
var User = mongoose.model('User');
var Employee = mongoose.model('Employee');
var Appointment = mongoose.model('Appointment');
var Patient = mongoose.model('Patient');
var Billing = mongoose.model('Billing');

module.exports.getAll = function(req, res) {
  const _patientProjection = "first_name last_name"
  if (!req.payload._id) {
    res.status(401).json({
      "message" : "UnauthorizedError: private profile"
    });
  } else {
    
    Patient
      .find({}, _patientProjection, (err, patient) => {
        let patientArr = [];
        if (err) {
          return res.status(500).send({message: err.message});
        }
        if (patient) {
          patient.forEach(patient => {
            patientArr.push(patient);
          });
        }
        
        res.send(patientArr);
      });
  }
  
};



