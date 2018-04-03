var mongoose = require('mongoose');
var gracefulShutdown;
var dbURI = 'mongodb://localhost/pearlyWhites?authSource=admin';


// BRING IN YOUR SCHEMAS & MODELS
require('./users');
require('./patients');
require('./visit');
require('./location');
require('./treatment');
require('./inventory');
require('./accounting');

//TEST DATA HERE
var testPatients = require('./data/patients');
var testLocation = require('./data/location');
var testInventory = require('./data/inventory');
var testTreatment = require('./data/treatment');
<<<<<<< HEAD
var testAccounts = require('./data/accounting');
=======
var testAccounting = require('./data/accounting');
var testUsers = require('./data/users');
var testVisit = require('./data/visit');
>>>>>>> 48845ad88745e24e3661c20aab3bd94dcdaec56a

function insertTestData(testRecordModule, modelName) {
  const records = testRecordModule.data();
  var Model = mongoose.model(modelName);
  records.forEach((record) => {
    let modelInstance = new Model(record);
    Model.findOne({'id':modelInstance.id}, 'id', (err, result) => {
      if (err || !result) {
        modelInstance.save((err) => {
          if (err) {
            console.error(err);
          }
        });
      }
    });
  });
}

const options = {
  useMongoClient: true,
  user: 'root',
  pass: 'Password1',
  autoIndex: true,
  reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
  reconnectInterval: 500, // Reconnect every 500ms
  poolSize: 10, // Maintain up to 10 socket connections
  // If not connected, return errors immediately rather than waiting for reconnect
  bufferMaxEntries: 0
};

mongoose.connect(dbURI, options);

// CONNECTION EVENTS
mongoose.connection.on('connected', function() {
  console.log('Mongoose connected to ' + dbURI);

  insertTestData(testLocation, 'Location');
  insertTestData(testPatients, 'Patient');
  insertTestData(testInventory, 'Inventory');
  insertTestData(testTreatment, 'Treatment');
  insertTestData(testAccounting, 'Accounting');
  insertTestData(testUsers, 'User');
  insertTestData(testVisit, 'Visit');


});
mongoose.connection.on('error', function(err) {
  console.log('Mongoose connection error: ' + err);
});
mongoose.connection.on('disconnected', function() {
  console.log('Mongoose disconnected');
});

// CAPTURE APP TERMINATION / RESTART EVENTS
// To be called when process is restarted or terminated
gracefulShutdown = function(msg, callback) {
  mongoose.connection.close(function() {
    console.log('Mongoose disconnected through ' + msg);
    callback();
  });
};
// For nodemon restarts
process.once('SIGUSR2', function() {
  gracefulShutdown('nodemon restart', function() {
    process.kill(process.pid, 'SIGUSR2');
  });
});
// For app termination
process.on('SIGINT', function() {
  gracefulShutdown('app termination', function() {
    process.exit(0);
  });
});
// For Heroku app termination
process.on('SIGTERM', function() {
  gracefulShutdown('Heroku app termination', function() {
    process.exit(0);
  });
});