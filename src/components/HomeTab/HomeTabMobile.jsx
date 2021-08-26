import './HomeTabMobile.scss';

function HomeTabMobile() {
  return (
    <div className="home-table__card">
      <div className="home-table__group">
        <p className="home-table__item">Дата</p>
        <p className="home-table__item_value">10.08.19</p>
      </div>
      <div className="home-table__group">
        <p className="home-table__item">Тип</p>
        <p className="home-table__item_value">-</p>
      </div>
      <div className="home-table__group">
        <p className="home-table__item">Категория</p>
        <p className="home-table__item_value">Разное</p>
      </div>
      <div className="home-table__group">
        <p className="home-table__item">Комментарий</p>
        <p className="home-table__item_value">Подарок жене</p>
      </div>
      <div className="home-table__group">
        <p className="home-table__item">Сума</p>
        <p className="home-table__item_value home-table__item_spend">300</p>
      </div>
      <div className="home-table__group">
        <p className="home-table__item">Баланс</p>
        <p className="home-table__item_value">6 900.00</p>
      </div>
    </div>
  );
}

export default HomeTabMobile;
