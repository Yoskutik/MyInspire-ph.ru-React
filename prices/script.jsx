import React from 'react';
import ReactDom from 'react-dom';
import Body from "../assets/elements/body";
import Prices from "./elements/Prices";
import Loader from "../assets/elements/loader";
import $ from 'jquery';

$(window).ready(() => {
    const PAGE = (
        <Body>
            <Prices/>
        </Body>
    );

    ReactDom.render(
        PAGE,
        $('#body')[0]
    );
});
