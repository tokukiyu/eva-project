// frontend/src/store/actions.ts
import { createAction } from '@reduxjs/toolkit';

export const fetchSongs = createAction('FETCH_SONGS');
export const addSong = createAction('ADD_SONG', (newSong) => ({
  payload: newSong,
}));
export const fetchOverallStatistics = createAction('FETCH_OVERALL_STATISTICS');
