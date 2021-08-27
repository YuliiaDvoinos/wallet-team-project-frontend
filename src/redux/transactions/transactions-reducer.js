import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  isModalAddTransactionOpen,
  getTransactionsSuccess,
} from './transactions-actions';

const modalTransaction = createReducer(false, {
  [isModalAddTransactionOpen]: () => true,
});

const result = createReducer([], {
  [getTransactionsSuccess]: (_, { payload }) => payload,
});

export default combineReducers({
  modalTransaction,
  result,
});
