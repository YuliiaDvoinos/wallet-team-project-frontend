import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  openModalTransaction,
  closeModalTransaction,
  getTransactionsSuccess,
  addTransactionsSuccess,
  addNewTransaction,
  getTransactionsStatsSuccess,
} from './transactions-actions';

const modalTransaction = createReducer(false, {
  [openModalTransaction]: () => true,
  [closeModalTransaction]: () => false,
});

const allTransactions = createReducer([], {
  [getTransactionsSuccess]: (_, { payload }) => payload,
  [addNewTransaction]: (state, { payload }) => [...state, payload],
  [getTransactionsStatsSuccess]: (_, { payload }) => payload,
});

const addedTransactions = createReducer([], {
  [addTransactionsSuccess]: (state, { payload }) => [...state, payload],
});

export default combineReducers({
  modalTransaction,
  allTransactions,
  addedTransactions,
});
