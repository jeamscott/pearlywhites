var mongoose = require( 'mongoose' );

var suppliesSchema = new mongoose.Schema({
  id_number: {
    type: String,
    required: false
  },
  item_name: {
    type: String,
    required: false    
  },
  quantity: {
    type: String,
    required: false
   }

});
mongoose.model('Supplies', suppliesSchema);