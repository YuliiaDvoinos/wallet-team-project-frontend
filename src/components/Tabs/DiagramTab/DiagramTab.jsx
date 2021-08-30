import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getAllStatistics } from '../../../redux/transactions/transactions-selectors';
import { getStatistics } from '../../../redux/transactions/transactions-operations';
import Chart from './Chart';
import Table from './Table';
import './DiagramTab.scss';

export default function DiagramTab() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getStatistics());
  }, [dispatch]);
  const statistics = useSelector(getAllStatistics);

  return (
    <section className="statistics">
      <div className="statistics__container">
        <h1 className="statistics__title">Статистика</h1>
        <div className="statistics__data-container">
          <Chart statistics={statistics} />
          <Table statistics={statistics} />
          {/* <Doughnut data={data} /> */}
        </div>
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
