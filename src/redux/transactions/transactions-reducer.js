import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { isModalAddTransactionOpen } from './transactions-actions';

const modalTransaction = createReducer(false, {
  [isModalAddTransactionOpen]: () => true,
});

export default combineReducers({
  modalTransaction,
});
