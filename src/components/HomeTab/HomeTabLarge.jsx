import './HomeTabLarge.scss';

function HomeTabLarge({ transactions }) {
  const ItemSpendClass = 'home-table__cell home-table__cell_spend';
  const ItemIncomeClass = 'home-table__cell home-table__cell_income';

  return (
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
              <td className="home-table__cell">
                {type === '-' ? balance - money : balance + money}
              </td>
            </tr>
          ),
        )}

        {/* !!!!!!!!!!!!!STATIC DATA!!!!!!!!!!!! */}
        <tr className="home-table__row">
          <td className="home-table__cell">05.01.19</td>
          <td className="home-table__cell">+</td>
          <td className="home-table__cell">Регулярный доход</td>
          <td className="home-table__cell">
            Бонус за январь TEST LAAAAARGE MESSSAGGGEEEE
          </td>
          <td className="home-table__cell home-table__cell_income">8 000.00</td>
          <td className="home-table__cell">14 900.00</td>
        </tr>
        <tr className="home-table__row">
          <td className="home-table__cell">07.01.19</td>
          <td className="home-table__cell">-</td>
          <td className="home-table__cell">Машина</td>
          <td className="home-table__cell">Масло</td>
          <td className="home-table__cell home-table__cell_spend">1000.00</td>
          <td className="home-table__cell">13 900.00</td>
        </tr>
        <tr className="home-table__row">
          <td className="home-table__cell">07.01.19</td>
          <td className="home-table__cell">-</td>
          <td className="home-table__cell">Продукты</td>
          <td className="home-table__cell">Овощи на неделю</td>
          <td className="home-table__cell home-table__cell_spend">280.00</td>
          <td className="home-table__cell">13 870.00</td>
        </tr>
      </tbody>
    </table>
  );
}

export default HomeTabLarge;
