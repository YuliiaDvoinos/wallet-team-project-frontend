import './Table.scss';

export default function Table({
  statistics: { categoriesSummary, totalSpend, totalIncome },
}) {
  return (
    <div className="table">
      <div className="filter">
        <input
          className="filter__input"
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

        <input
          className="filter__input"
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

      <ul className="statistics list">
        {/* title */}
        <li className="statistics__title-wrapper">
          <span className="statistics__title-part">Категория</span>
          <span className="statistics__title-part">Сумма</span>
        </li>

        {/* main */}
        {categoriesSummary &&
          Object.keys(categoriesSummary).map((category, index) => (
            // statistics__item
            <li className="statistics__item" key={index}>
              <span className="statistics__color"></span>
              {category}
              <span className="statistics__costs">
                {categoriesSummary[category]}
              </span>
            </li>
          ))}
      </ul>
      {/* outcome */}
      <ul className="outcome list">
        <li className="outcome__item">
          <span className="outcome__type">Расходы:</span>
          <span className="outcome__total outcome__total--expenses">
            {totalSpend}
          </span>
        </li>
        <li className="outcome__item">
          <span className="outcome__type">Доходы:</span>
          <span className="outcome__total  outcome__total--income">
            {totalIncome}
          </span>
        </li>
      </ul>
    </div>
  );
}
