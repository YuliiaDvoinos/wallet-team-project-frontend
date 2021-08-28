import { createAction } from '@reduxjs/toolkit';

export const openModalTransaction = createAction(
  'transactions/openModalTransaction',
);

export const closeModalTransaction = createAction(
  'transactions/closeModalTransaction',
);
