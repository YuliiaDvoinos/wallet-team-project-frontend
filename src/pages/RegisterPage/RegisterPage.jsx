import RegisterForm from '../../components/RegisterForm';
import './RegisterPage.scss';

export default function registerPage() {
  return (
    <section className="register">
      <div className="container">
        <div className="register__left">
          <h1 className="register__title">Finance App</h1>
        </div>
        <div className="register__right">
          <RegisterForm />
        </div>
      </div>
    </section>
  );
}
