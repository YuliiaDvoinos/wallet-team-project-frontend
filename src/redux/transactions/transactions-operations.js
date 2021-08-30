import axios from 'axios';
import * as actions from './transactions-actions';

//get Transactions
const fetchTransactions = () => async dispatch => {
  dispatch(actions.getTransactionsRequest());

  try {
    const { data } = await axios.get('/transactions');
    dispatch(actions.getTransactionsSuccess(data.data.result));
  } catch (error) {
    dispatch(actions.getTransactionsError());
  }
};

const addTransaction = Statefull => async dispatch => {
  dispatch(actions.addTransactionsRequest());

  try {
    const { data } = await axios.post('/transactions', Statefull);
    dispatch(actions.addTransactionsSuccess(data));
  } catch (error) {
    dispatch(actions.addTransactionsError(error.message));
  }
};

const operations = {
  fetchTransactions,
  addTransaction,
};

export default operations;
