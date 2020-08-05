import React from 'react';
import Card from './card';
import Message from './message';

const Info = () => (
  <div className="info">
    <div className="info__container container">
      <Message />
      <Card />
    </div>
  </div>
);

export default Info;
