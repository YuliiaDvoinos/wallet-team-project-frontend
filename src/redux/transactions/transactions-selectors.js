// import { createSelector } from 'reselect';

const getAllTransactions = state => state.transactions.result;

const transactionSelectors = {
  getAllTransactions,
};

export default transactionSelectors;
