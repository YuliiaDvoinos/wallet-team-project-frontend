const getAllTransactions = state => state.transactions.allTransactions;
//////////////////////////////////////////////////
const getAddedTransactions = state => state.transactions.addedTransactions;
//////////////////////////////////////////////////
const getAllStatistics = state => state.transactions.allStatistics;
//////////////////////////////////////////////////
const getIsModalAddTransactionOpen = state =>
  state.transactions.modalTransaction;

export {
  getAllTransactions,
  getAddedTransactions,
  getIsModalAddTransactionOpen,
  getAllStatistics,
};
