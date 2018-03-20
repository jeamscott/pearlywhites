var mongoose = require( 'mongoose' );

var visit_stepsSchema = new mongoose.Schema({
    id: {
      type: String,
      required: true
    },
    visit_id:{
      type: String,
      required: true 
    },
    treatment_id: {
      type: String,
      required: true  
    }
    
});
mongoose.model('Visit_steps', visit_stepsSchema);