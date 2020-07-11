import React from 'react';
import ReactDom from 'react-dom';
import Body from "@elements/body";
import Prices from "./elements/Prices";

document.addEventListener('DOMContentLoaded', () => {
    ReactDom.render(
        <Body>
            <Prices/>
        </Body>,
        document.querySelector('#body')
    );
});
