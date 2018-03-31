var mongoose = require( 'mongoose' );

var user_roleSchema = new mongoose.Schema({
  id_number: {
    type: String,
    required: true
  },
  user_account_id: {
    type: String,
    required: true
  },
  user_role_id: {
    type: String,
    required: true
  }
});
mongoose.model('User_role', user_roleSchema);