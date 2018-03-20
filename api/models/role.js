var mongoose = require( 'mongoose' );

var roleSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true
  },
  role_name: {
    type: String,
    required: true
  }

});
mongoose.model('Role', roleSchema);