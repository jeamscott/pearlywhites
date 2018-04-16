var express = require('express');
var router = express.Router();
var jwt = require('express-jwt');
var auth = jwt({
  secret: 'MY_SECRET',
  userProperty: 'payload'
});

var ctrlProfile = require('../controllers/profile');
var ctrlAuth = require('../controllers/authentication');
var ctrlPatient = require('../controllers/patient');
// var ctrlAccounting = require('../controllers/accounting');
var ctrlBilling = require('../controllers/billing');
var ctrlAppointment = require('../controllers/appointment');
var ctrlEmployee = require('../controllers/employee')
var ctrlPay = require('../controllers/pay')

// profile

router.get('/profile', auth, ctrlProfile.profileRead);
router.put('/profile', auth, ctrlProfile.profileWrite); //experimental

// patient
router.get('/patient/profile', auth, ctrlPatient.profileRead);
router.put('/patient/profile', auth, ctrlPatient.profileWrite); //experimental

// Employee
router.get('/employee', auth, ctrlEmployee.employeeRead);
router.put('/employee', auth, ctrlEmployee.employeeWrite);


// billing
router.get('/billing', auth, ctrlBilling.billingRead);
router.put('/billing', auth, ctrlBilling.billingWrite);

// pay
router.put('/pay', auth, ctrlPay.payBill)

// appointment
router.get('/appointment', auth, ctrlAppointment.appointmentRead);
router.put('/appointment', auth, ctrlAppointment.appointmentWrite);

// authentication
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

// accounting
// router.get('/accounting', crtlAccounting.getAll);

module.exports = router;
