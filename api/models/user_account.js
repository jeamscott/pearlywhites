var mongoose = require( 'mongoose' );

var user_accountSchema = new mongoose.Schema({
  id_number: {
    type: String,
    required: true
  },
  user_name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  user_role: {
    type: String,
    required: true
  }

});
mongoose.model('User_account', user_accountSchema);