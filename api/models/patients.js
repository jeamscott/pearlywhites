var mongoose = require( 'mongoose' );

var patientSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true    
  },
  id_number: {
    type: String,
    required: true
  },
  phone_number: {
    type: String,
    required: true 
  },
  street: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  zip_code: {
    type: String,
    required: true
  },
  email_address: {
    type: String,
    required: false
  }

});
mongoose.model('Patient', patientSchema);