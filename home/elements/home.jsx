import React from 'react';
import Collage from './collage';
import InfoCard from './infoCard';
import InfoMessage from './infoMessage';
import '../styles/info.scss';

/**
 * A content of home page. Contains Collage and Info.
 * @component
 */
const Home = () => (
  <div className="body">
    <Collage />

    <div className="info">
      <div className="info__container container">
        <InfoMessage />
        <InfoCard />
      </div>
    </div>

    {/* <Genres /> */}
  </div>
);

export default Home;
