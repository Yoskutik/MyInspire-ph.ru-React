import React from 'react';
import ReactDOM from 'react-dom';
import { debounce } from '@assets/utils';
import Body from '@elements/body';
import Locations from './elements/locations';
import './style.scss';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Body>
      <Locations />
    </Body>,
    document.querySelector('#body'),
  );

  window.addEventListener('resize', debounce(() => {
    document.querySelectorAll('.location')
      .forEach(location => {
        const extra = location.querySelector('.location__photos_extra--photos');
        extra.style.maxHeight = `${location.querySelector('.location__photos_main').clientHeight}px`;
      });
  }, 50));

  const onMainImageLoad = evt => {
    evt.target.removeEventListener('load', onMainImageLoad);
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    });
  };

  document.querySelectorAll('.location__photos_main')
    .forEach(photo => photo.addEventListener('load', onMainImageLoad));
});
