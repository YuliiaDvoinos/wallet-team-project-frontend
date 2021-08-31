import Media from 'react-media';
import Navigation from '../../components/Sidebar/Navigation';
import Currency from '../../components/Sidebar/Currency';
import Balance from '../../components/Sidebar/Balance';
import './Sidebar.scss';

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <Navigation />
      <Balance />
      <Media
        queries={{
          tablet: '(min-width: 768px)',
        }}
      >
        {({ tablet }) => <>{tablet && <Currency />}</>}
      </Media>
    </aside>
  );
}
