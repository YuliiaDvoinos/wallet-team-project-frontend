import { createAction } from '@reduxjs/toolkit';

// register
export const registerRequest = createAction('contacts/registerRequest');
export const registerSuccess = createAction('contacts/registerSuccess');
export const registerError = createAction('contacts/registerError');

// login
export const loginRequest = createAction('contacts/loginRequest');
export const loginSuccess = createAction('contacts/loginSuccess');
export const loginError = createAction('contacts/loginError');

// logout
export const logoutRequest = createAction('contacts/logoutRequest');
export const logoutSuccess = createAction('contacts/logoutSuccess');
export const logoutError = createAction('contacts/logoutError');

// getCurrentUser
export const getCurrentUserRequest = createAction(
  'contacts/getCurrentUserRequest',
);
export const getCurrentUserSuccess = createAction(
  'contacts/getCurrentUserSuccess',
);
export const getCurrentUserError = createAction('contacts/getCurrentUserError');