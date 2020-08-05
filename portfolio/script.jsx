import React from 'react';
import ReactDOM from 'react-dom';
import Body from '@elements/body';
import Portfolio from './elements/portfolio';
import './style.scss';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Body>
      <Portfolio />
    </Body>,
    document.querySelector('#body'),
  );
});
