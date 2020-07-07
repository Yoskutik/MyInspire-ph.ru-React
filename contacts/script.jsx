import React from 'react';
import ReactDom from 'react-dom';
import $ from 'jquery';
import Loader from "../assets/elements/loader";
import Body from "../assets/elements/body";
import Contacts from "./elements/contacts";

$(window).ready(() => {
    const PAGE = (
        <Body>
            <Contacts/>
        </Body>
    );

    ReactDom.render(
        PAGE,
        $('#body')[0]
    );

    $('.contacts__message').on('focus', '.contacts__message_input', evt => {
        if (evt.target.classList.contains('contacts__message_input')) {
            evt.target.classList.remove('danger');
            $('.contacts__error-message').hide();
        }
    });

    console.timeEnd('Loaded');
    Loader.hideLoader();
});
