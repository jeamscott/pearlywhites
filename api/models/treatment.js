var mongoose = require( 'mongoose' );

var treatmentSchema = new mongoose.Schema({
    id_number: {
    type: String,
    required: true
  },
    treatment_id: {
    type: String,
    required: true
    },
    description: {
    type: String,
    required: false
   },
    tooth_id: {
    type: String,
    required: true
    }

});
mongoose.model('Treatment', treatmentSchema);