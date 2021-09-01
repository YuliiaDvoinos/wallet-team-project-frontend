import axios from 'axios';
import * as actions from './transactions-actions';
import toastr from 'toastr';

const getTransactions = () => async dispatch => {
  dispatch(actions.getTransactionsRequest());
  try {
    const { data } = await axios.get('/transactions');
    dispatch(actions.getTransactionsSuccess(data.data.result));
  } catch (error) {
    dispatch(actions.getTransactionsError(error.message));
    toastr.error(error.message);
  }
};

const addTransaction = transactionData => async dispatch => {
  dispatch(actions.addTransactionsRequest());
  try {
    const { data } = await axios.post('/transactions', transactionData);
    dispatch(actions.addTransactionsSuccess(data.data.result));
    toastr.success('Транзакция добавлена!');
  } catch (error) {
    dispatch(actions.addTransactionsError(error.message));
    toastr.error(error.message);
  }
};

const getQueryStatistics =
  ({ month, year }) =>
  async dispatch => {
    dispatch(actions.getQueryStatisticsRequest());

    try {
      const { data } = await axios.get(
        `/transactions/statistics?month=${month}&year=${year}`,
      );
      dispatch(actions.getQueryStatisticsSuccess(data.data));
    } catch (error) {
      dispatch(actions.getQueryStatisticsError(error.message));
      toastr.error(error.message);
    }
  };

export { getTransactions, addTransaction, getQueryStatistics };
