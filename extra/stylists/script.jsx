import React from 'react';
import ReactDOM from 'react-dom';
import Stylists from "./elements/stylists";
import Body from "../../assets/elements/body";

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        <Body>
            <Stylists/>
        </Body>,
        document.querySelector('#body')
    )
});
