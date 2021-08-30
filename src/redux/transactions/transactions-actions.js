import { createAction } from '@reduxjs/toolkit';

// modal
export const openModalTransaction = createAction(
  'transactions/openModalTransaction',
);
export const closeModalTransaction = createAction(
  'transactions/closeModalTransaction',
);

//getTransactions
export const getTransactionsRequest = createAction(
  'transactions/getTransactionsRequest',
);
export const getTransactionsSuccess = createAction(
  'transactions/getTransactionsSuccess',
);
export const getTransactionsError = createAction(
  'transactions/getTransactionsError',
);

//addTransactions
export const addTransactionsRequest = createAction(
  'transactions/addTransactionsRequest',
);
export const addTransactionsSuccess = createAction(
  'transactions/addTransactionsSuccess',
);
export const addTransactionsError = createAction(
  'transactions/addTransactionsError',
);

//addNewTransaction
export const addNewTransaction = createAction('transactions/addNewTransaction');

//getStats
export const getTransactionsStatsRequest = createAction(
  'transactions/getTransactionsStatsRequest',
);
export const getTransactionsStatsSuccess = createAction(
  'transactions/getTransactionsStatsSuccess',
);
export const getTransactionsStatsError = createAction(
  'transactions/getTransactionsStatsError',
);
