import Chart from './Chart';
import Table from './Table';
import './DiagramTab.scss';

export default function DiagramTab() {
  const markup = (
    <>
      <div className="statistics">
        <div className="statistics__container">
          <h1 className="statistics__title">Статистика</h1>
          <div className="statistics__data-container">
            <Chart />
            <Table />
          </div>
        </div>
      </div>
    </>
  );
  return markup;
}
