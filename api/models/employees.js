var mongoose = require( 'mongoose' );

var employeeSchema = new mongoose.Schema({
    user_name: {
        type: String,
        required: true
      },
    employee_status: {
        type: Boolean,
        required: true
      },

      
    });
    mongoose.model('Employee', employeeSchema);