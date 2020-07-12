import React from 'react';
import ReactDOM from 'react-dom';
import Body from '@elements/body';
import Locations from './elements/locations';

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        <Body>
            <Locations />
        </Body>,
        document.querySelector('#body'),
    );
});
