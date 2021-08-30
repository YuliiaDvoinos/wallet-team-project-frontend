import { useSelector } from 'react-redux';
import { getIsModalAddTransactionOpen } from '../../../redux/transactions/transactions-selectors';
import { ButtonAddTransaction, ModalAddTransaction } from '../../Transactions';
import './HomeTabLarge.scss';

function HomeTabLarge({ transactions }) {
  const isModalAddTransactionOpen = useSelector(getIsModalAddTransactionOpen);

  const ItemSpendClass = 'home-table__cell home-table__cell_spend';
  const ItemIncomeClass = 'home-table__cell home-table__cell_income';

  return (
    <>
      {isModalAddTransactionOpen && <ModalAddTransaction />}
      <table className="home-table">
        <thead className="home-table__header">
          <tr className="home-table__row">
            <th className="home-table__cell">Дата</th>
            <th className="home-table__cell">Тип</th>
            <th className="home-table__cell">Категория</th>
            <th className="home-table__cell">Комментарий</th>
            <th className="home-table__cell">Сумма</th>
            <th className="home-table__cell">Баланс</th>
          </tr>
        </thead>
        <tbody className="home-table__body">
          {transactions.map(
            ({ _id, type, date, money, category, comment, balance }) => (
              <tr key={_id} className="home-table__row">
                <td className="home-table__cell">{date}</td>
                <td className="home-table__cell">{type}</td>
                <td className="home-table__cell">{category.name}</td>
                <td className="home-table__cell">{comment}</td>
                <td className={type === '-' ? ItemSpendClass : ItemIncomeClass}>
                  {money}
                </td>
                <td className="home-table__cell">{balance}</td>
              </tr>
            ),
          )}
        </tbody>
      </table>
      <ButtonAddTransaction />
    </>
  );
}

export default HomeTabLarge;
