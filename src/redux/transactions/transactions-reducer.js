import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  openModalTransaction,
  closeModalTransaction,
  getTransactionsSuccess,
} from './transactions-actions';

const modalTransaction = createReducer(false, {
  [openModalTransaction]: () => true,
  [closeModalTransaction]: () => false,
});

const result = createReducer([], {
  [getTransactionsSuccess]: (_, { payload }) => payload,
});

export default combineReducers({
  modalTransaction,
  result,
});
