import React from 'react';
import Conditions from './conditions/conditions';
import PriceList from './priceList/priceList';

const Prices = () => (
  <div className="body">
    <h1 className="super-hidden">Цены</h1>
    <PriceList />
    <Conditions />
  </div>
);

export default Prices;
