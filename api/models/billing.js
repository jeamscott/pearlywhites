var mongoose = require( 'mongoose' );

var billingSchema = new mongoose.Schema({
    user_name: {
        type: String,
        required: true
      },
    balance_due: {
        type: Number,
        required: false
      },

      
    });
    mongoose.model('Billing', billingSchema);