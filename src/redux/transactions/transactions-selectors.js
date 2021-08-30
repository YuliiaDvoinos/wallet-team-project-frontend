const getAllTransactions = state => state.transactions.allTransactions;

const getAddedTransactions = state => state.transactions.addedTransactions;

const getIsModalAddTransactionOpen = state =>
  state.transactions.modalTransaction;
const getStats = state => state.transactions.result;

export {
  getAllTransactions,
  getAddedTransactions,
  getIsModalAddTransactionOpen,
  getStats,
};
