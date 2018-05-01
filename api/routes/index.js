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
var ctrlEmployee = require('../controllers/employee');
var ctrlPay = require('../controllers/pay');
var ctrlSupplies = require('../controllers/supplies')
var ctrlSupport = require('../controllers/support');
var ctrlInventory = require('../controllers/inventory')

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
// router.put('/billing', auth, ctrlBilling.billingWrite);

// pay
router.put('/pay', auth, ctrlPay.payBill)

// appointment
router.get('/appointment', auth, ctrlAppointment.appointmentRead);
router.put('/appointment', auth, ctrlAppointment.appointmentWrite);

// support
router.get('/support', auth, ctrlSupport.getAll);
router.get('/support/:id', auth, ctrlSupport.getPatient )
router.put('/patient/:id', auth, ctrlPatient.supportWrite)
router.put('/appointment/:id', auth, ctrlAppointment.supportWrite)
router.put('/billing/:id', auth, ctrlBilling.supportWrite)
router.get('/patient/:id', auth, ctrlPatient.supportRead)
router.get('/appointment/:id', auth, ctrlAppointment.supportRead)
router.get('/billing/:id', auth, ctrlBilling.supportRead)

// authentication
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);
router.post('/changePassword', auth, ctrlAuth.changePassword);

//supplies
router.get('/supplies', auth, ctrlSupplies.suppliesRead);

//inventory
router.get('/inventory', auth, ctrlInventory.inventoryRead);

// accounting
// router.get('/accounting', crtlAccounting.getAll);

module.exports = router;