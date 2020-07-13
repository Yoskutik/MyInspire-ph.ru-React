import $ from 'jquery';
import React from 'react';
import ReactDom from 'react-dom';
import Body from '@elements/body';
import Contacts from './elements/contacts';
import './style.scss';

$(window).ready(() => {
    ReactDom.render(
        <Body>
            <Contacts />
        </Body>,
        $('#body')[0],
    );

    $('.contacts__message').on('focus', '.contacts__message_input', evt => {
        if (evt.target.classList.contains('contacts__message_input')) {
            evt.target.classList.remove('danger');
            $('.contacts__error-message').hide();
        }
    });
});
