// backend/src/models/Song.js
const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  artist: {
    type: String,
    required: true,
  },
  album: String,
  genre: String,
});

const Song = mongoose.model('Song', songSchema);

module.exports = Song;
