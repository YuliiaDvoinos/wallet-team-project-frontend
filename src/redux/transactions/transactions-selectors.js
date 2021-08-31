const getAllTransactions = state => state.transactions.allTransactions;
//////////////////////////////////////////////////
const getAddedTransactions = state => state.transactions.addedTransactions;
//////////////////////////////////////////////////
const getAllQueryStatistics = state => state.transactions.queryStatistics;

const getIsModalAddTransactionOpen = state =>
  state.transactions.modalTransaction;
export {
  getAllTransactions,
  getAddedTransactions,
  getAllQueryStatistics,
  getIsModalAddTransactionOpen,
};
