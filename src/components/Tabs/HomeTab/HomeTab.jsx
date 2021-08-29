import { useMedia } from 'react-media';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import operations from '../../../redux/transactions/transactions-operations';
import transactionSelectors from '../../../redux/transactions/transactions-selectors';
import convertor from './utils';
import HomeTabLarge from './HomeTabLarge';
import HomeTabMobile from './HomeTabMobile';

export default function HomeTab() {
  const { fetchTransactions } = operations;
  const { getAllTransactions } = transactionSelectors;
  const transactions = useSelector(getAllTransactions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTransactions());
  }, [dispatch, fetchTransactions]);

  const convertedArr = convertor(transactions);

  const GLOBAL_MEDIA_QUERIES = {
    small: '(max-width: 767px)',
    large: '(min-width: 768px)',
  };
  const matches = useMedia({ queries: GLOBAL_MEDIA_QUERIES });

  return (
    <>
      {matches.small ? (
        <HomeTabMobile transactions={convertedArr} />
      ) : (
        <HomeTabLarge transactions={convertedArr} />
      )}
    </>
  );
}
