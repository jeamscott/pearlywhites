var mongoose = require( 'mongoose' );

var locationSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true
  },
  user_account_id: {
    type: String,
    required: true
  },
  role_id: {
    type: String,
    required: true
  }
});
mongoose.model('User_role', user_roleSchema);