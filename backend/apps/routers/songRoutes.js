// backend/src/routes/songRoutes.js
const express = require('express');
const Song = require('../models/Song');

const router = express.Router();

// Other routes for CRUD operations

router.get('/statistics', async (req, res) => {
  try {
    const totalSongs = await Song.countDocuments();
    const totalArtists = await Song.distinct('artist').length;
    // Add other statistics calculations as needed

    res.json({
      totalSongs,
      totalArtists,
      // Add other statistics results here
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
