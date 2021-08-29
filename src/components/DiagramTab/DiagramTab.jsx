import Chart from './Chart';
import Table from './Table';
import './DiagramTab.scss';
import Header from '../Header';
import Navigation from '../Navigation';
import Currency from '../Currency';
import '../../pages/DashboardPage/DashboardPage.scss';

export default function DiagramTab() {
  const markup = (
    <>
      <Header />
      <main className="dashboard">
        <div className="container">
          <div className="statistics">
            <div>
              <Navigation />
              <Currency />
            </div>
            <div className="statistics__container">
              <h1 className="statistics__title">Статистика</h1>
              <div className="statistics__data-container">
                <Chart />
                <Table />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
  return markup;
}
