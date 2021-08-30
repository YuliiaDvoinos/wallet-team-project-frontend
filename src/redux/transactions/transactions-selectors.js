const getAllTransactions = state => state.transactions.allTransactions;

const getAddedTransactions = state => state.transactions.addedTransactions;

const getIsModalAddTransactionOpen = state =>
  state.transactions.modalTransaction;

export {
  getAllTransactions,
  getAddedTransactions,
  getIsModalAddTransactionOpen,
};
