import * as SplashScreen from 'expo-splash-screen';
import {
  all,
  call,
  takeLatest,
  select,
  put,
  fork,
} from 'redux-saga/effects';

import {
  ON_APP_READY,
  ON_APP_LOADING_FINISH,
} from '../actions';

import cashFlowSagas from './cashFlow';

export function* appReady() {
  const isReady = yield select(({ rootReducer }) => rootReducer.isAppReady);
  if (!isReady) {
    yield call(SplashScreen.hideAsync);
  }
  // do nothing. just ignore
  yield put({ type: ON_APP_LOADING_FINISH });
}

export default function* rootSaga() {
  yield all([
    takeLatest(ON_APP_READY, appReady),
    fork(cashFlowSagas),
    // fork(other sagas)
  ]);
}
