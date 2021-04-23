export const CASH_FLOW_MOCK_DATA = {
  username: 'Almafintech SRL',
  currentBalance: 66457.63,
  transactions: [
    {
      id: '1',
      userPaid: 'Daruma Pagos SA',
      alias: 'DARUMA.PAGOS',
      amount: 0.01,
      interestEarn: 6.02,
      rateEarn: 29.7,
    },
    {
      id: '2',
      userPaid: 'Alex Weil',
      alias: 'ALEX.DARUMA',
      amount: 580.77,
      interestEarn: 139.34,
      rateEarn: 29.7,
    },
    {
      id: '3',
      userPaid: 'Almafintech SRL',
      alias: 'ALMAFINTECH.DARUMA',
      amount: 66457.63,
      interestEarn: 6388.41,
      rateEarn: 29.7,
    },
    {
      id: '4',
      userPaid: 'Allaria Ledesma y Cia SA',
      alias: 'ALLARIA.FUND.DARUMA',
      amount: 0,
      interestEarn: 0,
      rateEarn: 29.7,
    },
  ],
};

export const HTTP_METHODS = {
  GET: 'get',
  POST: 'post',
  PUT: 'put',
  PATCH: 'patch',
  DELETE: 'delete',
};
