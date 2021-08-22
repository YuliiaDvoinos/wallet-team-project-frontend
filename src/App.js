import { useEffect, Suspense, lazy } from 'react';
import { Switch } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { getCurrentUser } from './redux/auth/auth-operations';
// import routes from './routes';
// import PrivateRoute from './components/PrivateRoute';
// import PublicRoute from './components/PublicRoute';

const HomeDashboardPage = lazy(() =>
  import('./pages/HomeDashboardPage' /* webpackChunkName: "home-page" */),
);
const RegisterPage = lazy(() =>
  import('./pages/RegisterPage' /* webpackChunkName: "register-page" */),
);
const LoginPage = lazy(() =>
  import('./pages/LoginPage' /* webpackChunkName: "login-page" */),
);

export default function App() {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getCurrentUser());
  // }, [dispatch]);
  return (
    <Suspense>
      <Switch>
        {/* <PublicRoute exact path={routes.home}>
          <HomeDashboardPage />
        </PublicRoute> */}
        {/* <PublicRoute restricted path={routes.register} redirectTo={routes.home}>
          <RegisterPage />
        </PublicRoute> */}
        {/* <PublicRoute restricted path={routes.login} redirectTo={routes.home}>
          <LoginPage />
        </PublicRoute> */}
        {/* <PrivateRoute path={routes.contacts} redirectTo={routes.login}>
            <ContactsPage />
          </PrivateRoute> */}
      </Switch>
    </Suspense>
  );
}
