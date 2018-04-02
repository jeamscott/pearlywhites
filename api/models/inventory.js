var mongoose = require( 'mongoose' );

var inventorySchema = new mongoose.Schema({
    id_number: {
        type: String,
        required: true
      },
    item_name: {
        type: String,
        required: true
      },
    product_description: {
        type: String,
        required: true
    },
    quantity: {
        type: String,
        required: true
    },
    cost: {
        type: String,
        required: false
    }
      
    });
    mongoose.model('Inventory', inventorySchema);