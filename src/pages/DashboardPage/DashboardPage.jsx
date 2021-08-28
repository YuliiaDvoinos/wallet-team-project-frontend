import Header from '../../components/Header';
import Navigation from '../../components/Navigation';
import Currency from '../../components/Currency';
import HomeTab from '../../components/HomeTab';
import './DashboardPage.scss';

export default function DashboardPage() {
  
  return (
    <>
      <Header />
      <main className="dashboard">
        <div className="container">
          <Navigation />
          <Currency />
          <HomeTab />
        </div>
      </main>
     
    </>
  );
}
