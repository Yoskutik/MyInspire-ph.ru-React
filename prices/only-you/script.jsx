import React from 'react';
import ReactDom from 'react-dom';
import Body from '@elements/body';
import '../style.scss';
import './tmp.scss';

const ListItem = ({title, lastPrice, price, description}) => {
  return (
    <div className="list__item">
      <div className="list__item_header">
        <h2 className="list__item_title">
          {title}
        </h2>

      </div>
      <p className="list__item_info" itemProp="description">
        {description.map(el => (
          <React.Fragment key={Math.random()}>
            <span>{el}</span>
            <br />
          </React.Fragment>
        ))}
      </p>
      <div>
        <span style={{ textDecoration: 'line-through' }}>
          {lastPrice}
        </span>
        {' '}
        <strong className="list__item_price">
          <span>{price}</span>
        </strong>
      </div>
    </div>
  );
};

document.addEventListener('DOMContentLoaded', () => {
  ReactDom.render(
    <Body>
      <div className="tmp containerg">
        <ListItem title="27 декабря - фотодень: Only you" description={[
          'Часовая съёмка',
          '50 кадров в обработке',
          'Минималистичная фотостудия с циклорамой',
          'Предоставляются базовые вещи и аксессуары',
        ]} lastPrice={11600} price={7000} />
      </div>
    </Body>,
    document.querySelector('#body'),
  );
});
