import axios from 'axios';
import * as actions from './transactions-actions';

//get Transactions
const fetchTransactions = () => async dispatch => {
  dispatch(actions.getTransactionsRequest());

  try {
    const { data } = await axios.get('/transactions');
    dispatch(actions.getTransactionsSuccess(data.data.result));
    console.log(data);
  } catch (error) {
    dispatch(actions.getTransactionsError());
    alert({
      text: "You don't have transactions",
      type: 'error',
    });
  }
};

const operations = {
  fetchTransactions,
};

export default operations;
