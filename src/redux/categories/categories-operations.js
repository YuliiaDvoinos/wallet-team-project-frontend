import axios from 'axios';
import * as actions from './categories-actions';

const fetchCategories = () => async dispatch => {
  dispatch(actions.getCategoriesRequest());

  try {
    const { data } = await axios.get('/categories');
    console.log(data.data.result);

    dispatch(actions.getCategoriesSuccess(data.data.result));
  } catch (error) {
    dispatch(actions.getCategoriesError());
  }
};

const operations = {
  fetchCategories,
};

export default operations;
