import React from 'react';
import Collage from './collage/collage';

const Info = React.lazy(() => import('./info/info'));
const Genres = React.lazy(() => import('./genres/genres'));

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

    <React.Suspense fallback={null}>
      <Genres />
    </React.Suspense>
  </div>
);

export default Home;
