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
        {/* <Doughnut data={data} /> */}
      </div>
    </section>
  );
}

// const data = {
//   datasets: [
//     {
//       label: '# of Votes',

//       // data: statsArr,
//       data: [11, 11, 11, 11, 11, 11, 11, 11, 11],

//       backgroundColor: [
//         '#FED057',
//         '#FFD8D0',
//         '#FD9498',
//         ' #C5BAFF',
//         '#6E78E8',
//         '#4A56E2',
//         '#81E1FF',
//         '#24CCA7',
//         '#00AD84',
//       ],
//       borderColor: [
//         '#FED057',
//         '#FFD8D0',
//         '#FD9498',
//         ' #C5BAFF',
//         '#6E78E8',
//         '#4A56E2',
//         '#81E1FF',
//         '#24CCA7',
//         '#00AD84',
//       ],
//       borderWidth: 1,
//     },
//   ],
// };
