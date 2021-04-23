import {
  call,
  takeLatest,
  put,
} from 'redux-saga/effects';
import { getMockCashFlowData } from '../../services/cashFlow';
import { printError } from '../../utils';
import { turnLoading } from '../actions';

import * as cashFlowActions from '../actions/cashFlow';

// import other sagas
function* getCashFlowData() {
  try {
    // yield put(turnLoading(true));
    yield put(cashFlowActions.loadingCashData(true));
    const data = yield call(getMockCashFlowData);
    yield put(cashFlowActions.setMainData(data));
  } catch (error) {
    yield call(printError, 'Error. Try again later');
    yield put(cashFlowActions.setMainData(null));
  } finally {
    // yield put(turnLoading(false));
    yield put(cashFlowActions.loadingCashData(false));
  }
}

export default function* cashFlowSagas() {
  yield takeLatest(cashFlowActions.GET_CASH_FLOW, getCashFlowData);
}
