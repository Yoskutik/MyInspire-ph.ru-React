import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Body from "../../assets/elements/body";
import Locations from "./locations";

$(window).ready(() => {
    ReactDOM.render(
        <Body>
            <Locations/>
        </Body>,
        $('#body')[0]
    );
});
