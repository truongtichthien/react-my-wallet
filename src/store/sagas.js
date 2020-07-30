import { call, put, takeLatest, all } from 'redux-saga/effects';
import { createIndexedDB } from '../api/IndexedDBHandler';
import { actions } from '../constants/Constants';
import { onLoading, offLoading } from './loading/action';
import { loadDebtsSuccess, loadDebtsError } from './debt/action';

function* loadAllDebts() {
  yield put(onLoading());
  const { getAllRecords } = yield call(createIndexedDB);
  try {
    const response = yield call(getAllRecords);
    yield put(loadDebtsSuccess(response));
  } catch (error) {
    yield put(loadDebtsError([]));
  } finally {
    yield put(offLoading());
  }
}

function* watchLoadAllDebts() {
  yield takeLatest(actions.loadDebts, loadAllDebts);
}

// function* watchAddDebt() {
//   yield takeEvery(actions.loadDebts, loadAllDebts);
// }

// function* watchRemoveDebt() {
//   yield takeEvery(actions.loadDebts, loadAllDebts);
// }

// function* watchRemoveAllDebt() {
//   yield takeEvery(actions.loadDebts, loadAllDebts);
// }

export default function* rootSaga() {
  yield all([
    watchLoadAllDebts(),
    // watchAddDebt(),
    // watchRemoveDebt(),
    // watchRemoveAllDebt()
  ])
}
