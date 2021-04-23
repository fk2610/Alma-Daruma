export const GET_CASH_FLOW = 'GET_CASH_FLOW';
export const SET_CASH_FLOW = 'SET_CASH_FLOW';
export const LOADING_CASH_FLOW = 'LOADING_CASH_FLOW';

export const getMainData = () => ({
  type: GET_CASH_FLOW,
});

export const setMainData = (payload) => ({
  type: SET_CASH_FLOW,
  payload,
});

export const loadingCashData = (payload) => ({
  type: LOADING_CASH_FLOW,
  payload,
});
