// frontend/src/store/sagas.ts
import { put, takeLatest } from 'redux-saga/effects';
import { fetchSongs, fetchOverallStatistics } from './actions';

// Define your API endpoints or services to fetch data

function* handleFetchSongs() {
  try {
    // Make API call to fetch songs
    const songs = yield fetch('your_backend_api/songs').then((res) => res.json());
    yield put({ type: 'FETCH_SONGS', payload: songs });
  } catch (error) {
    console.error(error);
  }
}

function* handleFetchOverallStatistics() {
  try {
    // Make API call to fetch overall statistics
    const statistics = yield fetch('your_backend_api/songs/statistics').then((res) => res.json());
    yield put({ type: 'FETCH_OVERALL_STATISTICS', payload: statistics });
  } catch (error) {
    console.error(error);
  }
}

export default function* rootSaga() {
  yield takeLatest(fetchSongs.type, handleFetchSongs);
  yield takeLatest(fetchOverallStatistics.type, handleFetchOverallStatistics);
}
