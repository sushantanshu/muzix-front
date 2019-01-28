const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Track = new Schema({
  track_name: String,
  track_artist: String,
  track_url: String,
},{
    collection: 'tracks'
});

module.exports = mongoose.model('Track', Track);