import Header from '../components/Header';
import HomeTab from '../components/HomeTab';
import Balance from '../components/Balance';

export default function DashboardPage() {
  return (
    <section>
      <Header />
      <Balance />
      <HomeTab />
    </section>
  );
}
