import { useSelector } from 'react-redux';
import { getIsModalAddTransactionOpen } from '../../../redux/transactions/transactions-selectors';
import { ButtonAddTransaction, ModalAddTransaction } from '../../Transactions';
import './HomeTabMobile.scss';

function HomeTabMobile({ transactions }) {
  const isModalAddTransactionOpen = useSelector(getIsModalAddTransactionOpen);

  const tableSpendClass = 'home-table__card home-table__card_spend';
  const tableIncomeClass = 'home-table__card home-table__card_income';
  const itemSpendClass = 'home-table__item_value home-table__item_spend';
  const itemIncomeClass = 'home-table__item_value home-table__item_income';

  return (
    <>
      {!isModalAddTransactionOpen && <ButtonAddTransaction />}
      {isModalAddTransactionOpen && <ModalAddTransaction />}
      {transactions.map(
        ({ _id, type, date, money, category, comment, balance }) => (
          <ul
            key={_id}
            className={type === '-' ? tableSpendClass : tableIncomeClass}
          >
            <ul className="home-table__group list">
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
              <li className="home-table__item">Сумма</li>
              <li className={type === '-' ? itemSpendClass : itemIncomeClass}>
                {money}
              </li>
            </ul>
            <ul className="home-table__group list">
              <li className="home-table__item">Баланс</li>
              <li className="home-table__item_value">{balance}</li>
            </ul>
          </ul>
        ),
      )}
    </>
  );
}

export default HomeTabMobile;
