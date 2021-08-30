import Chart from './Chart';
import Table from './Table';
import './DiagramTab.scss';

// import { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import operations from '../../../redux/transactions/transactions-operations';
// import { getStats } from '../../../redux/transactions/transactions-selectors';
import { Doughnut } from 'react-chartjs-2';
export default function DiagramTab() {
  // const { fetchStats } = operations;
  // const stats = useSelector(getStats);
  // const dispatch = useDispatch();


  // useEffect(() => {
  //   dispatch(fetchStats());
  // }, [dispatch, fetchStats]);

  // const result = stats.map(stat => {
  //   const result = stat.money;
  //   return result;
  // });
  // console.log(result);

  // console.log(getStatsData(stats));
  // console.log(stats.map(stat => stat.money));


  // const statsArr = Array.from(stats).map(stat => stat.money);
  // console.log(statsArr);

  const data = {
    datasets: [
      {
        label: '# of Votes',

        // data: statsArr,
        data: [11, 11, 11, 11, 11, 11, 11, 11, 11],

        backgroundColor: [
          '#FED057',
          '#FFD8D0',
          '#FD9498',
          ' #C5BAFF',
          '#6E78E8',
          '#4A56E2',
          '#81E1FF',
          '#24CCA7',
          '#00AD84',
        ],
        borderColor: [
          '#FED057',
          '#FFD8D0',
          '#FD9498',
          ' #C5BAFF',
          '#6E78E8',
          '#4A56E2',
          '#81E1FF',
          '#24CCA7',
          '#00AD84',
        ],
        borderWidth: 1,
      },
    ],
  };

  const markup = (
    <>
      <section className="statistics">
        <div className="statistics__container">
          <h1 className="statistics__title">Статистика</h1>
          <div className="statistics__data-container">
            <Chart />
            <Doughnut data={data} />
            <Table />
          </div>
        </div>
      </section>
    </>
  );
  return markup;
}
