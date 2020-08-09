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
  const arrow = document.querySelector('.collage__arrow');

  const setArrowPosition = () => {
    arrow.style.bottom = '20px';
    arrow.style.left = `${collage.clientWidth / 2 - arrow.clientWidth / 2}px`;
    if (window.innerHeight < collage.getBoundingClientRect().bottom) {
      collage.style.position = 'initial';
    } else {
      collage.style.position = 'relative';
    }
  };
  let img = document.querySelector('.collage__img');
  img.addEventListener('load', () => {
    collage.style.height = `${img.clientHeight - header.clientHeight}px`;
    setTimeout(() => {
      collage.style.height = `${img.clientHeight - header.clientHeight}px`;
      arrow.style.visibility = 'visible';
      setArrowPosition();
    });
  });

  window.addEventListener('resize', debounce(() => {
    img = document.querySelector('.collage__img');
    collage.style.height = `${img.clientHeight - header.clientHeight}px`;
    setArrowPosition();
  }));
  document.dispatchEvent(new Event('resize'));

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

  document.addEventListener('scroll', () => {
    arrow.style.visibility = 'hidden';
  });
});
