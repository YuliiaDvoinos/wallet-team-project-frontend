import Chart from './Chart';
import Table from './Table';
import './DiagramTab.scss';

export default function DiagramTab() {
  const markup = (
    <div className="stats">
      <h1 className="title">Cтатистика</h1>
      <div className="chartDonut">
        <Chart />
      </div>
      <div classname="tableWrapper">
        <div className="filter">
          <input type="month">Месяц</input>
          <input type="">Год</input>
        </div>
        <Table />
      </div>
    </div>
  );

  return markup;
}
