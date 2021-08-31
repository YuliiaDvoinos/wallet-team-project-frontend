import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Media from 'react-media';
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

  return (
    <Media
      queries={{
        mobile: '(max-width: 767px)',
      }}
    >
      {({ mobile }) => (
        <>
          {mobile ? (
            <HomeTabMobile transactions={convertedArr} />
          ) : (
            <HomeTabLarge transactions={convertedArr} />
          )}
        </>
      )}
    </Media>
  );
}
