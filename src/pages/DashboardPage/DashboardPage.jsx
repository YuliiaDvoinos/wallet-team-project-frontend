import { useSelector } from 'react-redux';
import transactionSelectors from '../../redux/transactions/transactions-selectors';
import Header from '../../components/Header';
import Navigation from '../../components/Navigation';
import Currency from '../../components/Currency';
import HomeTab from '../../components/HomeTab';
import ButtonAddTransaction from '../../components/ButtonAddTransaction';
import ModalAddTransaction from '../../components/ModalAddTransaction';
import './DashboardPage.scss';

export default function DashboardPage() {
  const isModalAddTransactionOpen = useSelector(
    transactionSelectors.getIsModalAddTransactionOpen,
  );
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
      <ButtonAddTransaction />
      {isModalAddTransactionOpen && <ModalAddTransaction />}
    </>
  );
}
