import React from 'react';
import ReactDom from 'react-dom';
import { checkElementVisibility, debounce } from '@assets/utils';
import Body from '@elements/body';
import Home from './elements/home';
import './styles/info.scss';

document.addEventListener('DOMContentLoaded', () => {
  ReactDom.render(
    <Body>
      <Home />
    </Body>,
    document.querySelector('#body'),
  );

  const collage = document.querySelector('.collage');
  const header = document.querySelector('.header');
  let img = document.querySelector('.collage__img');
  img.addEventListener('load', () => {
    collage.style.height = `${img.clientHeight - header.clientHeight}px`;
    setTimeout(() => {
      collage.style.height = `${img.clientHeight - header.clientHeight}px`;
    });
  });

  window.addEventListener('resize', debounce(() => {
    img = document.querySelector('.collage__img');
    collage.style.height = `${img.clientHeight - header.clientHeight}px`;
  }));

  document.addEventListener('scroll', debounce(() => {
    document.querySelectorAll('.genres__container').forEach(el => {
      const { style } = el;
      if (checkElementVisibility(el)) {
        style.transform = 'translateY(0)';
        style.opacity = '1';
      } else {
        const rect = el.getBoundingClientRect();
        style.opacity = '0';
        style.transform = rect.bottom < 0 ? 'translateY(-80px)' : 'translateY(80px)';
      }
    });
  }, 50));
  document.dispatchEvent(new Event('resize'));
});
