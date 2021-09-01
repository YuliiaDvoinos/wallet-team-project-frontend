import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  openModalTransaction,
  closeModalTransaction,
  getTransactionsSuccess,
  addTransactionsSuccess,
  getQueryStatisticsSuccess,
} from './transactions-actions';

const modalTransaction = createReducer(false, {
  [openModalTransaction]: () => true,
  [closeModalTransaction]: () => false,
});

const allTransactions = createReducer([], {
  [getTransactionsSuccess]: (_, { payload }) => payload,
});

const addedTransactions = createReducer([], {
  [addTransactionsSuccess]: (state, { payload }) => [...state, payload],
});

const queryStatistics = createReducer([], {
  [getQueryStatisticsSuccess]: (_, { payload }) => payload,
});

export default combineReducers({
  modalTransaction,
  allTransactions,
  addedTransactions,
  queryStatistics,
});
