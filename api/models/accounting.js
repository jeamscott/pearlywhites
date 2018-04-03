var mongoose = require( 'mongoose' );

var accountingSchema = new mongoose.Schema({
    id_number: {
        type: String,
        required: true
      },
      accountNumber: {
        type: String,
        required: false 
      },
      name: {
        type: String,
        required: true 
      },
      type: {
      type: String,
      required: true  
      },
      balance: {
         type: String,
         required: false
      }
    });
    mongoose.model('Accounting', accountingSchema);