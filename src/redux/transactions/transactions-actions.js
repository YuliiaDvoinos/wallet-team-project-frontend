import { createAction } from '@reduxjs/toolkit';

// modal
export const openModalTransaction = createAction(
  'transactions/openModalTransaction',
);
export const closeModalTransaction = createAction(
  'transactions/closeModalTransaction',
);

// get transactions
export const getTransactionsRequest = createAction(
  'transactions/getTransactionsRequest',
);
export const getTransactionsSuccess = createAction(
  'transactions/getTransactionsSuccess',
);
export const getTransactionsError = createAction(
  'transactions/getTransactionsError',
);

// add transactions
export const addTransactionsRequest = createAction(
  'transactions/addTransactionsRequest',
);
export const addTransactionsSuccess = createAction(
  'transactions/addTransactionsSuccess',
);
export const addTransactionsError = createAction(
  'transactions/addTransactionsError',
);

// get query statistics
export const getQueryStatisticsRequest = createAction(
  'transactions/getQueryStatisticsRequest',
);
export const getQueryStatisticsSuccess = createAction(
  'transactions/getQueryStatisticsSuccess',
);
export const getQueryStatisticsError = createAction(
  'transactions/getQueryStatisticsError',
);
