var mongoose = require( 'mongoose' );

var patientSchema = new mongoose.Schema({
  id_number: {
    type: String,
    required: false
  },
  first_name: {
    type: String,
    required: false    
  },
  last_name: {
    type: String,
    required: false
  },
  phone_number: {
    type: String,
    required: false 
  },
  street: {
    type: String,
    required: false
  },
  city: {
    type: String,
    required: false
  },
  state: {
    type: String,
    required: false
  },
  zip_code: {
    type: String,
    required: false
  },
  email_address: {
    type: String,
    required: false
  },
  visit_history: {
    type: Date,
    required: false
  },
  user_name: {
    type: String,
    required: true,
    unique: true
  }

});
mongoose.model('Patient', patientSchema);