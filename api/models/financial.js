var mongoose = require( 'mongoose' );

var financialSchema = new mongoose.Schema({
    id_number: {
        type: String,
        required: true
      },
      credit_card_number: {
        type: String,
        required: false 
      },
      expiration_date: {
        type: String,
        required: true 
      },
      cvc_code: {
      type: String,
      required: true  
      },
      check: {
         type: String,
         required: false 
      },
      cash: {
          type: String,
          required: false
      }
    });
    mongoose.model('Financial', financialSchema);