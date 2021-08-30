import axios from 'axios';
import * as actions from './transactions-actions';

//get Transactions
const getTransactions = () => async dispatch => {
  dispatch(actions.getTransactionsRequest());

  try {
    const { data } = await axios.get('/transactions');
    dispatch(actions.getTransactionsSuccess(data.data.result));
  } catch (error) {
    dispatch(actions.getTransactionsError());
  }
};

const addTransaction = transactionData => async dispatch => {
  dispatch(actions.addTransactionsRequest());

  try {
    const { data } = await axios.post('/transactions', transactionData);

    dispatch(actions.addTransactionsSuccess(data.data.result));
  } catch (error) {
    dispatch(actions.addTransactionsError(error.message));
  }
};

export { getTransactions, addTransaction };
