var mongoose = require( 'mongoose' );

var visitSchema = new mongoose.Schema({
  id_number: {
    type: String,
    required: true
  },
  visit_id: {
    type: String,
    required: true
  },
  treatment_id: {
  type: String,
    required: true
  }

});
mongoose.model('Visit', visitSchema);