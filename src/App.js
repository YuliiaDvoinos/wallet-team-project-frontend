import { Switch, Route } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import Currency from './components/Currency/Currency';
const App = () => {
  return (
    <div>
    {/* <Switch>
      <Route exact path="/register" component={RegisterPage} />
      <Route exact path="/login" component={LoginPage} />
    </Switch> */}
      <Currency/>

    </div>
  );
};
export default App;
