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
        required: true 
      },
      accountType: {
      type: String,
      required: false  
      },
      balance: {
         type: String,
         required: false
      }
    });
    mongoose.model('Accounting', accountingSchema);