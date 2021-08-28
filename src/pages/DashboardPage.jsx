import { useSelector } from 'react-redux';
import { getIsModalAddTransactionOpen } from '../redux/transactions/transactions-selectors';
import Header from '../components/Header';
import ButtonAddTransaction from '../components/ButtonAddTransaction';
import ModalAddTransaction from '../components/ModalAddTransaction';

export default function DashboardPage() {
  const isModalAddTransactionOpen = useSelector(getIsModalAddTransactionOpen);
  return (
    <>
      <Header />
      <ButtonAddTransaction />
      {isModalAddTransactionOpen && <ModalAddTransaction />}
    </>
  );
}
