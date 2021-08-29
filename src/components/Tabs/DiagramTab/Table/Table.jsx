import './Table.scss';
export default function Table() {
  const markup = (
    <>
      <div className="table">
        <div className="table__filter-container">
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
          <input
            className="table__filter-input"
            name="year"
            list="years"
            placeholder="Год"
          />
          <datalist id="years">
            <option value="2021" />
            <option value="2020" />
            <option value="2019" />
            <option value="2018" />
            <option value="2017" />
          </datalist>
        </div>

        <div className="table__statistics">
          <ul className="table__statistics--list">
            <div className="table__statistics--name">
              <span className="table__statistics--column">Категория</span>
              <span className="table__statistics--column">Сумма</span>
            </div>
            <li className="table__statistics--item">
              <span className="table__statistics--color"></span> Основные
              расходы <span className="table__statistics--costs">20 000</span>
            </li>
            <li className="table__statistics--item">
              <span className="table__statistics--color"></span> Продукты{' '}
              <span className="table__statistics--costs">2 800</span>
            </li>
            <li className="table__statistics--item">
              <span className="table__statistics--color"></span> Машина{' '}
              <span className="table__statistics--costs">200</span>
            </li>
            <li className="table__statistics--item">
              <span className="table__statistics--color"></span> Забота о себе{' '}
              <span className="table__statistics--costs">200</span>
            </li>
            <li className="table__statistics--item">
              <span className="table__statistics--color"></span> Забота о детях{' '}
              <span className="table__statistics--costs">200</span>
            </li>
            <li className="table__statistics--item">
              <span className="table__statistics--color"></span> Товары для дома{' '}
              <span className="table__statistics--costs">200</span>
            </li>
            <li className="table__statistics--item">
              <span className="table__statistics--color"></span> Образование{' '}
              <span className="table__statistics--costs">200</span>
            </li>
            <li className="table__statistics--item">
              <span className="table__statistics--color"></span> Досуг{' '}
              <span className="table__statistics--costs">200</span>
            </li>
            <li className="table__statistics--item">
              <span className="table__statistics--color"></span> Другие расходы{' '}
              <span className="table__statistics--costs">200</span>
            </li>
          </ul>
        </div>
        <div className="table__outcome">
          <ul className="table__outcome--list">
            <li className="table__outcome--item">
              <span className="table__outcome--name">Расходы:</span>
              <span className="table__outcome--expenses">22 549.24</span>
            </li>
            <li className="table__outcome--item">
              <span className="table__outcome--name">Доходы:</span>
              <span className="table__outcome--income">27 350.00</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
  return markup;
}
