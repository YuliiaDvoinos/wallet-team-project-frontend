import { Route, Switch } from 'react-router-dom';
import routes from '../../routes';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import { HomeTab, DiagramTab } from '../../components/Tabs';
import Currency from '../../components/Sidebar/Currency';
import './DashboardPage.scss';

export default function DashboardPage() {
  return (
    <>
      <Header />
      <div className="dashboard">
        <div className="dashboard__wrapper">
          <div className="container">
            <Sidebar />
            <main>
              <Switch>
                <Route path={routes.home} component={HomeTab} />
                <Route path={routes.statistics} component={DiagramTab} />
                <Route path={routes.currency} component={Currency} />
              </Switch>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
