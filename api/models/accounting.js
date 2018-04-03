var mongoose = require( 'mongoose' );

var accountingSchema = new mongoose.Schema({
<<<<<<< HEAD
      id_number: {
=======
    id_number: {
>>>>>>> 48845ad88745e24e3661c20aab3bd94dcdaec56a
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
      required: true  
      },
      balance: {
         type: String,
         required: false
      }
    });
    mongoose.model('Accounting', accountingSchema);