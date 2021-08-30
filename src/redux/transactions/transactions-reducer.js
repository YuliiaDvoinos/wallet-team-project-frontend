import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  openModalTransaction,
  closeModalTransaction,
  getTransactionsSuccess,
  addTransactionsSuccess,
  addNewTransaction,
} from './transactions-actions';

const modalTransaction = createReducer(false, {
  [openModalTransaction]: () => true,
  [closeModalTransaction]: () => false,
});

const result = createReducer([], {
  [getTransactionsSuccess]: (_, { payload }) => payload,
  [addNewTransaction]: (state, { payload }) => [...state, payload],
});

const transactions = createReducer([], {
  [addTransactionsSuccess]: (state, { payload }) => [...state, payload],
});

export default combineReducers({
  modalTransaction,
  result,
  transactions,
});
