var mongoose = require( 'mongoose' );

var toothSchema = new mongoose.Schema({
  id_number: {
    type: String,
    required: true
  },

  tooth_letter: {
    type: String,
    required: false
  },

  tooth_number: {
    type: String,
    required: true
  }

});
mongoose.model('Tooth', toothSchema);