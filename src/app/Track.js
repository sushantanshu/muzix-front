const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Track = new Schema({
  track_id: {
    type: Number
  },
  track_name: {
    type: String
  },
  track_comment: {
    type: String
  }
},{
    collection: 'tracks'
});

module.exports = mongoose.model('Track', Track);