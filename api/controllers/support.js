var mongoose = require('mongoose');
var User = mongoose.model('User');
var Employee = mongoose.model('Employee');
var Appointment = mongoose.model('Appointment');
var Patient = mongoose.model('Patient');
var Billing = mongoose.model('Billing');

module.exports.getAll = function(req, res) {
  const _patientProjection = "user_name first_name last_name phone_number state zip_code"
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

module.exports.getPatient = function(req, res) {

  Patient.findOne({'user_name':req.params.id},
  'id_number first_name last_name phone_number street city state zip_code email_address visit_history user_name',
    function(err, patient) {
          if(err) {
              res.status(404).json({"message" : "No record found"});
              return;
          }
          res.status(200).json(patient);
    })
}


