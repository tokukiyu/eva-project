// backend/src/utils/statsUtils.js
const Song = require('../models/Song');

// Calculate overall statistics
exports.getOverallStatistics = async (req, res) => {
  try {
    const totalSongs = await Song.countDocuments();
    const totalArtists = await Song.distinct('artist').length;
    const totalAlbums = await Song.distinct('album').length;
    const totalGenres = await Song.distinct('genre').length;

    const genreCounts = await Song.aggregate([
      { $group: { _id: '$genre', count: { $sum: 1 } } },
      { $sort: { count: -1 } },
    ]);

    const artistCounts = await Song.aggregate([
      { $group: { _id: '$artist', count: { $sum: 1 } } },
      { $sort: { count: -1 } },
    ]);

    res.json({
      totalSongs,
      totalArtists,
      totalAlbums,
      totalGenres,
      genreCounts,
      artistCounts,
      // Add other statistics results here
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
