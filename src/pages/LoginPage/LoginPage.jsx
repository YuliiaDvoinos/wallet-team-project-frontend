import { LoginForm } from '../../components/Forms';
import './LoginPage.scss';

export default function LoginPage() {
  return (
    <section className="login">
      <div className="container">
        <div className="login__left">
          <h1 className="login__title">Finance App</h1>
        </div>
        <div className="login__right">
          <LoginForm />
        </div>
      </div>
    </section>
  );
}
