import { useEffect, Suspense, lazy } from 'react';
import { Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getCurrentUser } from './redux/auth/auth-operations';
import routes from './routes';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
// import AppBar from './components/AppBar/AppBar';
import Spinner from './components/Spinner';

const RegisterPage = lazy(() =>
  import('./pages/RegisterPage' /* webpackChunkName: "register-page" */),
);
const LoginPage = lazy(() =>
  import('./pages/LoginPage' /* webpackChunkName: "login-page" */),
);
const DashboardPage = lazy(() =>
  import('./pages/DashboardPage' /* webpackChunkName: "dashboard-page" */),
);

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <>
      {/* <AppBar /> */}
      
      <Suspense fallback={<Spinner />}>
        <Switch>
          <PublicRoute
            restricted
            path={routes.register}
            redirectTo={routes.dashboard}
          >
            <RegisterPage />
          </PublicRoute>

          <PublicRoute
            restricted
            path={routes.login}
            redirectTo={routes.dashboard}
          >
            <LoginPage />
          </PublicRoute>

          <PrivateRoute
            exact
            path={routes.dashboard}
            redirectTo={routes.register}
          >
            <DashboardPage />
          </PrivateRoute>
        </Switch>
      </Suspense>
    </>
  );
}
