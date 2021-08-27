import axios from 'axios';
import * as actions from './auth-actions';

axios.defaults.baseURL = 'https://wallet-tpb.herokuapp.com/api';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

// register
export const register = registerFormData => async dispatch => {
  dispatch(actions.registerRequest());

  try {
    const { data } = await axios.post('/users/register', registerFormData);
    token.set(data.token);
    dispatch(actions.registerSuccess(data));
  } catch (error) {
    dispatch(actions.registerError(error.message));
  }
};

// login
export const login = loginFormData => async dispatch => {
  dispatch(actions.loginRequest());

  try {
    const { data } = await axios.post('/users/login', loginFormData);
    token.set(data.token);
    dispatch(actions.loginSuccess(data));
  } catch (error) {
    dispatch(actions.loginError(error.message));
  }
};

// logout
export const logout = () => async dispatch => {
  dispatch(actions.logoutRequest());

  try {
    await axios.post('/users/logout');
    token.unset();
    dispatch(actions.logoutSuccess());
  } catch (error) {
    dispatch(actions.logoutError(error.message));
  }
};

// getCurrentUser
export const getCurrentUser = () => async (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();
  if (!persistedToken) return;
  token.set(persistedToken);
  dispatch(actions.getCurrentUserRequest());

  try {
    const { data } = await axios.get('/users/current');

    dispatch(actions.getCurrentUserSuccess(data));
  } catch (error) {
    dispatch(actions.getCurrentUserError(error.message));
  }
};
