import React from 'react';
import ReactDOM from 'react-dom';
import Body from "../../assets/elements/body";
import Studios from "./elements/studios";

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        <Body>
            <Studios/>
        </Body>,
        document.querySelector("#body")
    )
});
