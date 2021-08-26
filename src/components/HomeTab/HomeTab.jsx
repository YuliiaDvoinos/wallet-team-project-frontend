import Media from 'react-media';
import HomeTabLarge from './HomeTabLarge';
import HomeTabMobile from './HomeTabMobile';

export default function HomeTab() {
  return (
    <div>
      <Media
        queries={{
          small: '(max-width: 767px)',
          large: '(min-width: 768px)',
        }}
      >
        {matches => (
          <>
            {matches.small && <HomeTabMobile />}
            {matches.large && <HomeTabLarge />}
          </>
        )}
      </Media>
    </div>
  );
}
