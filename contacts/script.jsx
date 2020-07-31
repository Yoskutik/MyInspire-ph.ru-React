import React from 'react';
import ReactDom from 'react-dom';
import Body from '@elements/body';
import Contacts from './elements/contacts';
import './style.scss';

document.addEventListener('DOMContentLoaded', () => {
    ReactDom.render(
        <Body>
            <Contacts />
        </Body>,
        document.querySelector('#body'),
    );

    document.querySelector('.contacts__message').addEventListener('focus', evt => {
        if (evt.target.classList.contains('contacts__message_input')) {
            evt.target.classList.remove('danger');
            document.querySelector('.contacts__error-message').style.display = 'none';
        }
    }, true);
});
