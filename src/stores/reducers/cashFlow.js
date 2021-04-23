import {
  SET_CASH_FLOW,
  LOADING_CASH_FLOW,
} from '../actions/cashFlow';

// import reducers

const initialState = {
  cashFlow: null,
  transactions: [],
  isLoadingCashFlow: true,
};

const cashFlowReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CASH_FLOW: {
      return {
        ...state,
        cashFlow: action.payload,
        transactions: action.payload.transactions,
      };
    }
    case LOADING_CASH_FLOW: {
      return { ...state, isLoadingCashFlow: action.payload };
    }
    default:
      return state;
  }
};

export default cashFlowReducer;
