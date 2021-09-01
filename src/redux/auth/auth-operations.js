import axios from 'axios';
import * as actions from './auth-actions';
import toastr from 'toastr';

axios.defaults.baseURL = 'https://wallet-tpb.herokuapp.com/api';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const register =
  ({ name, email: fewEmail, password }) =>
  async dispatch => {
    dispatch(actions.registerRequest());

    try {
      const email = fewEmail.toLowerCase();
      const { data } = await axios.post('/users/register', {
        name,
        email,
        password,
      });
      token.set(data.token);
      dispatch(actions.registerSuccess(data));
      toastr.success('Регистрация выполнена!');
    } catch (error) {
      dispatch(actions.registerError(error.message));
      toastr.error(error.message);
    }
  };

export const login =
  ({ email: fewEmail, password }) =>
  async dispatch => {
    dispatch(actions.loginRequest());

    try {
      const email = fewEmail.toLowerCase();
      const { data } = await axios.post('/users/login', { email, password });
      token.set(data.token);
      dispatch(actions.loginSuccess(data));
      toastr.success('Логинизация выполнена!');
    } catch (error) {
      dispatch(actions.loginError(error.message));
      toastr.error(error.message);
    }
  };

export const logout = () => async dispatch => {
  dispatch(actions.logoutRequest());

  try {
    await axios.post('/users/logout');
    token.unset();
    dispatch(actions.logoutSuccess());
    toastr.success('Выход выполнен!');
  } catch (error) {
    dispatch(actions.logoutError(error.message));
    toastr.error(error.message);
  }
};

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
    toastr.error(error.message);
  }
};
