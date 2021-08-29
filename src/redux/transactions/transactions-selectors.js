const getAllTransactions = state => state.transactions.result;

const getIsModalAddTransactionOpen = state =>
  state.transactions.modalTransaction;

const transactionSelectors = {
  getAllTransactions,
  getIsModalAddTransactionOpen,
};

export default transactionSelectors;
