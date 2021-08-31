import './Table.scss';
import { useState, useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getQueryStatistics } from '../../../../redux/transactions/transactions-operations';
export default function Table({
  statistics: {
    categoriesSummary,
    totalSpend,
    totalIncome,
    uniqueMonth,
    uniqueYear,
  },
}) {
  const [filterData, setFilterData] = useState({
    month: '',
    year: '',
  });

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getQueryStatistics(filterData));
  }, [dispatch, filterData]);

  const handleChange = useCallback(e => {
    const {
      currentTarget: { name, value },
    } = e;
    setFilterData(prev => ({ ...prev, [name]: value }));
    
  }, []);
  return (
    <div className="table">
      <div className="filter">
        <input
          className="filter__input"
          name="month"
          value={filterData.month}
          list="months"
          placeholder="Месяц"
          onChange={handleChange}
        />
        <datalist id="months">
          {uniqueMonth && uniqueMonth.map(el => <option key={el} value={el} />)}
        </datalist>

        <input
          className="filter__input"
          name="year"
          value={filterData.year}
          list="years"
          placeholder="Год"
          onChange={handleChange}
        />
        <datalist id="years">
          {uniqueYear && uniqueYear.map(el => <option key={el} value={el} />)}
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
              <span className="statistics__color "></span>
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
