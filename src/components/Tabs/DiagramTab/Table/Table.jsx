import './Table.scss';

export default function Table({
  statistics: { categoriesSummary, totalSpend, totalIncome },
}) {
  return (
    // table
    <div className="table">
      {/* filter */}
      <div className="table__filter-container">
        {/* filter__input */}
        <input
          className="table__filter-input"
          name="month"
          list="months"
          placeholder="Месяц"
        />
        <datalist id="months">
          <option value="01" />
          <option value="02" />
          <option value="03" />
          <option value="04" />
          <option value="05" />
          <option value="06" />
          <option value="07" />
          <option value="08" />
          <option value="09" />
          <option value="10" />
          <option value="11" />
          <option value="12" />
        </datalist>
        {/* filter__input */}
        <input
          className="table__filter-input"
          name="year"
          list="years"
          placeholder="Год"
        />
        <datalist id="years">
          <option value="2021" />
          <option value="2022" />
          <option value="2023" />
          <option value="2024" />
          <option value="2025" />
        </datalist>
      </div>

      {/* statistics */}
      <div className="table__statistics">
        {/* скорее всего div сверху убираем, и блок statistics это будет этот список. Не забудь добавить отдельный класс list, чтобы убрать точки */}
        <ul className="table__statistics--list">
          {/* statistics__title-wrapper */}
          {/* в списке должны быть только li элементы, поэтому надо исправить на li (внизу) */}
          <div className="table__statistics--name">
            {/* statistics__title */}
            <span className="table__statistics--column">Категория</span>
            <span className="table__statistics--column">Сумма</span>
          </div>
          {categoriesSummary &&
            Object.keys(categoriesSummary).map((category, index) => (
              // statistics__item
              <li className="table__statistics--item" key={index}>
                <span className="table__statistics--color"></span>
                {category}
                <span className="table__statistics--costs">
                  {categoriesSummary[category]}
                </span>
              </li>
            ))}
        </ul>
      </div>

      {/* outcome */}
      <div className="table__outcome">
        {/* опять же, див сверху можно убрать и оставить только UL и назвать его outcome */}
        <ul className="table__outcome--list">
          {/* outcome__item */}
          <li className="table__outcome--item">
            {/* outcome__type */}
            <span className="table__outcome--name">Расходы:</span>
            {/* outcome__total */}
            <span className="table__outcome--expenses">{totalSpend}</span>
          </li>
          <li className="table__outcome--item">
            <span className="table__outcome--name">Доходы:</span>
            <span className="table__outcome--income">{totalIncome}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
