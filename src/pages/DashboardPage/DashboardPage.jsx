import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import { HomeTab, DiagramTab } from '../../components/Tabs';
import './DashboardPage.scss';

export default function DashboardPage() {
  return (
    <>
      <Header />
      <div className="dashboard">
        <div className="container">
          <Sidebar />
          <main>
            <HomeTab />
            <DiagramTab />
          </main>
        </div>
      </div>
    </>
  );
}
