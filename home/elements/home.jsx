import React from 'react';
import Collage from './collage';
import Genres from './genres/genres';
import Info from './info/info';

// const Info = React.lazy(() => import('./info/info'));
// const Genres = React.lazy(() => import('./genres/genres'));

/**
 * A content of home page. Contains Collage and Info.
 * @component
 */
const Home = () => (
  <div className="body">
    <Collage />
    <Info />
    <Genres />
  </div>
);

export default Home;
