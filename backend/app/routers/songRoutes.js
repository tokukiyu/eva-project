// backend/src/routes/songRoutes.js
const express = require('express');
const songController = require('../controllers/songController');
const statsUtils = require('../utils/statsUtils');

const router = express.Router();

// CRUD routes
router.post('/', songController.createSong);
router.get('/', songController.getAllSongs);
router.put('/:id', songController.updateSong);
router.delete('/:id', songController.deleteSong);

// Statistics route
router.get('/statistics', statsUtils.getOverallStatistics);

module.exports = router;
