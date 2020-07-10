import React from 'react';
import ReactDOM from 'react-dom';
import Portfolio from "./elements/portfolio";
import Body from "../assets/elements/body";

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        <Body>
            <Portfolio/>
        </Body>,
        document.querySelector('#body')
    )
});
