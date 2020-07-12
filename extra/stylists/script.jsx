import React from 'react';
import ReactDOM from 'react-dom';
import Body from '@elements/body';
import Stylists from './elements/stylists';

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        <Body>
            <Stylists />
        </Body>,
        document.querySelector('#body'),
    );
});
