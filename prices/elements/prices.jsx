import React from 'react';
import Conditions from './conditions/conditions';
import PriceList from './priceList/priceList';

/**
 * Main component of prices page. Consists of list of services and
 * additional information, that stored in conditions.json.
 * @component
 */
const Prices = () => (
  <div className="body">
    <h1 className="super-hidden">Цены и услуги</h1>
    <PriceList />
    <Conditions />
  </div>
);

export default Prices;
