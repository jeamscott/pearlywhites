var mongoose = require( 'mongoose' );

var roleSchema = new mongoose.Schema({
  id_number: {
    type: String,
    required: true
  },
  role_name: {
    type: String,
    required: true
  },
  email_address:{
    type: String,
    required: true
  }

});
mongoose.model('Role', roleSchema);