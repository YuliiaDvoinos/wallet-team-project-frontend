import { createAction } from '@reduxjs/toolkit';

export const openModalTransaction = createAction(
  'transactions/openModalTransaction',
);
export const closeModalTransaction = createAction(
  'transactions/closeModalTransaction',
);
//////////////////////////////////////////////////
export const getTransactionsRequest = createAction(
  'transactions/getTransactionsRequest',
);
export const getTransactionsSuccess = createAction(
  'transactions/getTransactionsSuccess',
);
export const getTransactionsError = createAction(
  'transactions/getTransactionsError',
);
//////////////////////////////////////////////////
export const addTransactionsRequest = createAction(
  'transactions/addTransactionsRequest',
);
export const addTransactionsSuccess = createAction(
  'transactions/addTransactionsSuccess',
);
export const addTransactionsError = createAction(
  'transactions/addTransactionsError',
);
//////////////////////////////////////////////////
export const getStatisticsRequest = createAction(
  'transactions/getStatisticsRequest',
);
export const getStatisticsSuccess = createAction(
  'transactions/getStatisticsSuccess',
);
export const getStatisticsError = createAction(
  'transactions/getStatisticsError',
);
