import axios from 'axios';
import * as actions from './categories-actions';

const getCategories = () => async dispatch => {
  dispatch(actions.getCategoriesRequest());

  try {
    const { data } = await axios.get('/categories');

    dispatch(actions.getCategoriesSuccess(data.result));
  } catch (error) {
    dispatch(actions.getCategoriesError());
  }
};

export { getCategories };
