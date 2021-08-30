const getAllTransactions = state => state.transactions.allTransactions;

const getAddedTransactions = state => state.transactions.addedTransactions;

const getAllTransactions = state => state.transactions.result;
const getStats = state => state.transactions.result;
const getIsModalAddTransactionOpen = state =>
  state.transactions.modalTransaction;
const getStats = state => state.transactions.result;

export {
  getAllTransactions,
  getAddedTransactions,
  getIsModalAddTransactionOpen,
  getStats,
};
