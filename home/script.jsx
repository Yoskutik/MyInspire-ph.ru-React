import $ from 'jquery';
import React from 'react';
import ReactDom from 'react-dom';
import Body from '@elements/body';
import Home from './elements/home';
import './style.scss';

$(window).ready(() => {
    ReactDom.render(
        <Body>
            <Home />
        </Body>,
        $('#body')[0],
    );

    const img = document.querySelector('.collage__img');
    img.addEventListener('load', () => {
        const collage = document.querySelector('.collage');
        const header = document.querySelector('.header');
        collage.style.height = `${img.clientHeight - header.clientHeight}px`;
        setTimeout(() => {
            collage.style.height = `${img.clientHeight - header.clientHeight}px`;
        });
    });
});
