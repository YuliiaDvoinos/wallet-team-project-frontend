import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  loginError,
  loginSuccess,
  logoutError,
  logoutSuccess,
  registerError,
  registerSuccess,
  getCurrentUserError,
  getCurrentUserSuccess,
} from './auth-actions';

const initialUserState = { name: null, email: null };
const setUser = (_state, { payload: { user } }) => user;
const user = createReducer(initialUserState, {
  [registerSuccess]: setUser,
  [loginSuccess]: setUser,
  [logoutSuccess]: () => initialUserState,
  [getCurrentUserSuccess]: (_state, { payload }) => payload,
});

const setToken = (_state, { payload: { token } }) => token;
const token = createReducer(null, {
  [registerSuccess]: setToken,
  [loginSuccess]: setToken,
  [logoutSuccess]: () => null,
});

const setError = (_state, { payload }) => payload;
const error = createReducer(null, {
  [registerError]: setError,
  [loginError]: setError,
  [logoutError]: setError,
  [getCurrentUserError]: setError,
});

const isAuthenticated = createReducer(false, {
  [registerSuccess]: () => true,
  [loginSuccess]: () => true,
  [getCurrentUserSuccess]: () => true,
  [registerError]: () => false,
  [loginError]: () => false,
  [getCurrentUserError]: () => false,
  [logoutSuccess]: () => false,
});

export default combineReducers({
  user,
  token,
  error,
  isAuthenticated,
});
