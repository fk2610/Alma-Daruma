import callApi from '.';
import { HTTP_METHODS, CASH_FLOW_MOCK_DATA } from '../utils/Constants';

const baseUrl = '/cashflow';

export async function getCashFlowData() {
  const response = await callApi(HTTP_METHODS.GET, baseUrl);
  return response;
}

function solveCashMockData(resolve) {
  return setTimeout(() => resolve(CASH_FLOW_MOCK_DATA), 1000);
}

export async function getMockCashFlowData() {
  const data = await new Promise(solveCashMockData);
  return data;
}
