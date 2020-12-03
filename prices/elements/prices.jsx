import React from 'react';
import Alert from '@elements/alert';
import Conditions from './conditions/conditions';
import PriceList from './priceList/priceList';
import './tmp.scss';

const Prices = () => (
  <div className="body">
    <h1 className="super-hidden">Цены</h1>
    <Alert expiredAt={Alert.createExpiredAt(26, 12, 2020)} type={Alert.Types.INFO}>
      26 декабря - фотодень: coffee in bed
      <br />
      <a href="/prices/coffee-in-bed" className="tmp">Подробнее</a>
    </Alert>
    <Alert expiredAt={Alert.createExpiredAt(27, 12, 2020)} type={Alert.Types.INFO}>
      27 декабря - фотодень: only you
      <br />
      <a href="/prices/only-you" className="tmp">Подробнее</a>
    </Alert>
    <PriceList />
    <Conditions />
  </div>
);

export default Prices;
