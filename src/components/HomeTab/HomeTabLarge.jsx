import './HomeTabLarge.scss';

function HomeTabLarge() {
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
        <tr className="home-table__row">
          <td className="home-table__cell">04.01.19</td>
          <td className="home-table__cell">-</td>
          <td className="home-table__cell">Разное</td>
          <td className="home-table__cell">Подарок жене</td>
          <td className="home-table__cell home-table__cell_spend">300.00</td>
          <td className="home-table__cell">6 9000.00</td>
        </tr>
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
        <tr className="home-table__row">
          <td className="home-table__cell">07.01.19</td>
          <td className="home-table__cell">+</td>
          <td className="home-table__cell">Нерегулярный доход</td>
          <td className="home-table__cell">Подарок на др</td>
          <td className="home-table__cell home-table__cell_income">1 000.00</td>
          <td className="home-table__cell">14870.00</td>
        </tr>
      </tbody>
    </table>
  );
}

export default HomeTabLarge;
