var mongoose = require( 'mongoose' );

var accountingSchema = new mongoose.Schema({
      id_number: {
        type: String,
        required: true
      },
      accountNumber: {
        type: String,
        required: true 
      },
      name: {
        type: String,
        required: false 
      },
      accountType: {
      type: String,
      required: true  
      },
      balance: {
         type: String,
         required: false
      }
    });
    mongoose.model('Accounting', accountingSchema);