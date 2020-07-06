import React from 'react';
import ReactDom from 'react-dom';
import Body from "../assets/elements/body";
import Home from "./elements/home.jsx";
import $ from 'jquery';

$(window).ready(() => {
    const PAGE = (
        <Body>
            <Home/>
        </Body>
    );

    ReactDom.render(
        PAGE,
        $('#body')[0]
    );

    $('.loader').remove();
});
