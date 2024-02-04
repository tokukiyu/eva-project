// backend/src/controllers/songController.js
const Song = require("../models/Song");

// Create a new song
exports.createSong = async (req, res) => {
  try {
    const { title, artist, album, genre } = req.body;
    const newSong = new Song({ title, artist, album, genre });
    const savedSong = await newSong.save();

    res.status(201).json(savedSong);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Get a list of all songs
exports.getAllSongs = async (req, res) => {
  try {
    const songs = await Song.find();
    res.json(songs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Update a song by ID
exports.updateSong = async (req, res) => {
  try {
    const { title, artist, album, genre } = req.body;
    const updatedSong = await Song.findByIdAndUpdate(
      req.params.id,
      { title, artist, album, genre },
      { new: true } // Return the updated document
    );

    res.json(updatedSong);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Remove a song by ID
exports.deleteSong = async (req, res) => {
  try {
 //   console.log(req.params.id);
    await Song.findByIdAndDelete(req.params.id);
    res.status(204).end(); // No content (success)
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
