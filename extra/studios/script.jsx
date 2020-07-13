import React from 'react';
import ReactDOM from 'react-dom';
import Body from '@elements/body';
import Studios from './elements/studios';
import './style.scss';

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        <Body>
            <Studios />
        </Body>,
        document.querySelector('#body'),
    );
});
