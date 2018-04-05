var mongoose = require( 'mongoose' );

var visitSchema = new mongoose.Schema({
  id_number: {
    type: String,
    required: true
  },
  visit_id: {
    type: String,
    required: false
  },
  treatment_id: {
    type: String,
    required: false
  },
  user_role: {
    type: String,
    required: false
  },
  location_id: {
    type: String,
    required: false
  }

});
mongoose.model('Visit', visitSchema);