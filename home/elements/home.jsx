import React from 'react';
import Collage from './collage/collage';
import '../styles/info.scss';

const Info = React.lazy(() => import('./info/info'));

/**
 * A content of home page. Contains Collage and Info.
 * @component
 */
const Home = () => (
  <div className="body">
    <Collage />

    <React.Suspense fallback={null}>
      <Info />
    </React.Suspense>

    {/* <Genres /> */}
  </div>
);

export default Home;
