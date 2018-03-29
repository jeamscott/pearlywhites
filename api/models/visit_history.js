var mongoose = require( 'mongoose' );

var visit_historySchema = new mongoose.Schema({
    id_number: {
      type: String,
      required: true
    },
    status_time: {
      type: String,
      required: true
    },
    visit_id: {
      type: String,
      required: true
    }
    
});
mongoose.model('Visit_history', visit_historySchema);