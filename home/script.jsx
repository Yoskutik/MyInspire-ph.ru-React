import React from 'react';
import ReactDom from 'react-dom';
import { debounce } from '@assets/utils';
import Body from '@elements/body';
import Home from './elements/home';
import './style.scss';

document.addEventListener('DOMContentLoaded', () => {
    ReactDom.render(
        <Body>
            <Home />
        </Body>,
        document.querySelector('#body'),
    );

    const img = document.querySelector('.collage__img');
    const collage = document.querySelector('.collage');
    const header = document.querySelector('.header');
    img.addEventListener('load', () => {
        collage.style.height = `${img.clientHeight - header.clientHeight}px`;
        setTimeout(() => {
            collage.style.height = `${img.clientHeight - header.clientHeight}px`;
        });
    });

    window.addEventListener('resize', debounce(() => {
        collage.style.height = `${img.clientHeight - header.clientHeight}px`;
    }));
});
