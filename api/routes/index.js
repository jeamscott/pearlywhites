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
var ctrlAccounting = require('../controllers/accounting');
var ctrlBilling = require('../controllers/billing');

// profile
router.get('/profile', auth, ctrlProfile.profileRead);
router.put('/profile', auth, ctrlProfile.profileWrite); //experimental

// patient
router.get('/patient/profile', auth, ctrlPatient.profileRead);
router.put('/patient/profile', auth, ctrlPatient.profileWrite); //experimental

// billing
router.get('/billing', auth, ctrlBilling.billingRead);
router.put('/billing', auth, ctrlBilling.billingWrite);

// authentication
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

// accounting
router.get('/accounting', ctrlAccounting.getAll);

module.exports = router;
