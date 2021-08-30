import { useMedia } from 'react-media';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTransactions } from '../../../redux/transactions/transactions-operations';
import {
  getAllTransactions,
  getAddedTransactions,
} from '../../../redux/transactions/transactions-selectors';
import convertor from './utils';
import HomeTabLarge from './HomeTabLarge';
import HomeTabMobile from './HomeTabMobile';

export default function HomeTab() {
  const addedTransaction = useSelector(getAddedTransactions);
  const transactions = useSelector(getAllTransactions);
  const convertedArr = convertor(transactions);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTransactions());
  }, [dispatch, addedTransaction]);

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
