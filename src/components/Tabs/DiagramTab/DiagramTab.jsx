import { useSelector } from 'react-redux';
import { getAllQueryStatistics } from '../../../redux/transactions/transactions-selectors';

import Chart from './Chart';
import Table from './Table';
import './DiagramTab.scss';

export default function DiagramTab() {
  const statistics = useSelector(getAllQueryStatistics);

  return (
    <section className="diagram">
      <h1 className="diagram__title">Статистика</h1>
      <div className="diagram__data">
        <Chart statistics={statistics} />
        <Table statistics={statistics} />
      </div>
    </section>
  );
}
