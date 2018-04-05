var mongoose = require( 'mongoose' );

var appointmentSchema = new mongoose.Schema({
    user_name: {
        type: String,
        required: true
      },
    app_date: {
        type: Date,
        required: false
      },
    app_time: {
        type: String,
        required: false
      },
    app_location: {
        type: String,
        required: false
      },

      
    });
    mongoose.model('Appointment', appointmentSchema);