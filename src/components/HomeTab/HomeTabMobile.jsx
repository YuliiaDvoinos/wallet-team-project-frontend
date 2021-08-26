import './HomeTabMobile.scss';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import operations from '../../redux/transactions/transactions-operations';
import transactionSelectors from '../../redux/transactions/transactions-selectors';
// import {}
const { fetchTransactions } = operations;
const { getAllTransactions } = transactionSelectors;

function HomeTabMobile() {
  const transactions = useSelector(getAllTransactions);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => dispatch(fetchTransactions()));
  }, [dispatch]);

  return (
    <ul className="home-table__card">
      {transactions.map(({ _id, type, date, money, category, comment }) => (
        <>
          <ul key={_id} className="home-table__group list">
            <li className="home-table__item">Дата</li>
            <li className="home-table__item_value">{date}</li>
          </ul>
          <ul className="home-table__group list">
            <li className="home-table__item">Тип</li>
            <li className="home-table__item_value">{type}</li>
          </ul>
          <ul className="home-table__group list">
            <li className="home-table__item">Категория</li>
            <li className="home-table__item_value">{category.name}</li>
          </ul>
          <ul className="home-table__group list">
            <li className="home-table__item">Комментарий</li>
            <li className="home-table__item_value">{comment}</li>
          </ul>
          <ul className="home-table__group list">
            <li className="home-table__item">Сума</li>
            <li className="home-table__item_value home-table__item_spend">
              {money}
            </li>
          </ul>
          <ul className="home-table__group list">
            <li className="home-table__item">Баланс</li>
            <li className="home-table__item_value">6 900.00</li>
          </ul>
        </>
      ))}
      {/* <ul className="home-table__group list">
        <li className="home-table__item">Дата</li>
        <li className="home-table__item_value">10.08.19</li>
      </ul>
      <ul className="home-table__group list">
        <li className="home-table__item">Тип</li>
        <li className="home-table__item_value">-</li>
      </ul>
      <ul className="home-table__group list">
        <li className="home-table__item">Категория</li>
        <li className="home-table__item_value">Разное</li>
      </ul>
      <ul className="home-table__group list">
        <li className="home-table__item">Комментарий</li>
        <li className="home-table__item_value">Подарок жене</li>
      </ul>
      <ul className="home-table__group list">
        <li className="home-table__item">Сума</li>
        <li className="home-table__item_value home-table__item_spend">300</li>
      </ul>
      <ul className="home-table__group list">
        <li className="home-table__item">Баланс</li>
        <li className="home-table__item_value">6 900.00</li>
      </ul> */}
    </ul>
  );
}

export default HomeTabMobile;
