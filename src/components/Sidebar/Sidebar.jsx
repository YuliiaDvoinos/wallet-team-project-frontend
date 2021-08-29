import Navigation from '../../components/Sidebar/Navigation';
import Currency from '../../components/Sidebar/Currency';
import Balance from '../../components/Sidebar/Balance';
// import './Sidebar.scss';

export default function Sidebar() {
  return (
    <aside>
      <Navigation />
      <Balance />
      <Currency />
    </aside>
  );
}
