var mongoose = require( 'mongoose' );

var locationSchema = new mongoose.Schema({
  id_number: {
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
  state: {
    type: String,
    required: true
  },
  zip: {
    type: String,
    required: false
  }

});
mongoose.model('Location', locationSchema);