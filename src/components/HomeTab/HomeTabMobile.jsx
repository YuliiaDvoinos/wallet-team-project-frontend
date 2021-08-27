import './HomeTabMobile.scss';

function HomeTabMobile({ transactions }) {
  const tableSpendClass = 'home-table__card home-table__card_spend';
  const tableIncomeClass = 'home-table__card home-table__card_income';
  const itemSpendClass = 'home-table__item_value home-table__item_spend';
  const itemIncomeClass = 'home-table__item_value home-table__item_income';

  return (
    <>
      {transactions.map(({ _id, type, date, money, category, comment }) => (
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
            <li className="home-table__item_value">6 900.00</li>
          </ul>
        </ul>
      ))}

      {/* !!!STATIC DATA!!!!!!
      <ul className="home-table__group list">
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
    </>
  );
}

export default HomeTabMobile;
