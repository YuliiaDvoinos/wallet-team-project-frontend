import { createAction } from '@reduxjs/toolkit';

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
