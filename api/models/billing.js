var mongoose = require( 'mongoose' );

var billingSchema = new mongoose.Schema({
    email_address: {
        type: String,
        required: true
      },
    balance_due: {
        type: Number,
        required: false
      },

      
    });
    mongoose.model('Billing', billingSchema);