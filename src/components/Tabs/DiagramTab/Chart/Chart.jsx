import './Chart.scss';
import { Doughnut } from 'react-chartjs-2';
export default function Chart({ statistics }) {
  const data = {
    datasets: [
      {
        label: '# of Votes',
        data: statistics.categoriesSummary
          ? Object.values(statistics.categoriesSummary)
          : null,

        backgroundColor: [
          '#FED057',
          '#FFD8D0',
          '#FD9498',
          '#C5BAFF',
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
        cutout: 99,
      },
    ],
  };
  return (
    <div className="chart">
      <Doughnut className="chart__contents" data={data} />
      <span className="chart__ballance">&#8372; {statistics.totalSpend}</span>
    </div>
  );
}
