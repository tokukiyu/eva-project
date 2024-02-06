// frontend/src/store/reducers.ts
import { createReducer } from '@reduxjs/toolkit';

const songsReducer = createReducer([], (builder) => {
  builder
    .addCase('FETCH_SONGS', (state, action) => {
      // Fetch songs from the API
      // Update the state with the fetched songs
    })
    .addCase('ADD_SONG', (state, action) => {
      // Add a new song to the state
    });
});

const statisticsReducer = createReducer({}, (builder) => {
  builder
    .addCase('FETCH_OVERALL_STATISTICS', (state, action) => {
      // Fetch overall statistics from the API
      // Update the state with the fetched statistics
    });
});

export { songsReducer, statisticsReducer };
