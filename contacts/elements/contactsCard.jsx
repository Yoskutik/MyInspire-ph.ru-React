import PropTypes from 'prop-types';
import React from 'react';
import {
    CopyIcon, InstagramIcon, PinterestIcon, VKIcon,
} from '@elements/icons';
import { copyToClipboard } from '../../assets/utils';

/**
 * A component that contains all the contacts. Assuming the using
 * of toasts by calling parent's function.
 * @component
 */
export default class ContactsCard extends React.Component {
    /**
     * The information about contacts.
     * @component
     */
    Contacts = () => (
        <div className="contacts__contacts">
            <p className="contacts__contacts_item">
                E-mail:
                <a className="email"
                   itemProp="email"
                   href="mailto:tatiana.mix.1910@gmail.com">
                    tatiana.mix.1910@gmail.com
                </a>
                <button className="copy copy__mail" onClick={this.onCopyEmailClick.bind(this)} type="button">
                    <CopyIcon width="16" height="16" />
                </button>
            </p>
            <p className="contacts__contacts_item">
                Телефон:
                <a className="tel" href="tel:+7(999)515-42-17" itemProp="telephone">+7(999)515-42-17</a>
                <button className="copy copy__tel" onClick={this.onCopyTelClick.bind(this)} type="button">
                    <CopyIcon width="16" height="16" />
                </button>
            </p>
            <p className="contacts__contacts_item">Для связи в WhatsApp, Telegram</p>
        </div>
    );

    /**
     * The information about the address. Not sure, but I guess it's
     * good for the SEO.
     * @component
     */
    Address = () => (
        <div className="contacts__address" itemProp="address" itemScope itemType="http://schema.org/PostalAddress">
            <h2 className="contacts__address_city locality" itemProp="addressLocality">г. Санкт-Петербург</h2>
        </div>
    );

    /**
     * A social links list.
     * @component
     */
    Social = () => (
        <div className="contacts__social">
            <h3 className="contacts__social_title">Социальные сети:</h3>
            <div className="contacts__social_links">
                <a itemProp="sameAs" href="https://www.instagram.com/myinspire_ph/" target="_blank" rel="noreferrer">
                    <InstagramIcon width="38" height="38" />
                </a>
                <a itemProp="sameAs" href="https://vk.com/inspiredbyspb" target="_blank" rel="noreferrer">
                    <VKIcon width="38" height="38" />
                </a>
                <a itemProp="sameAs" href="https://www.pinterest.ru/tatianamix1910/" target="_blank" rel="noreferrer">
                    <PinterestIcon width="38" height="38" />
                </a>
            </div>
        </div>
    );

    /**
     * Copies the email and toasts about it
     * @callback
     */
    onCopyEmailClick = () => {
        copyToClipboard('tatiana.mix.1910@gmail.com');
        this.props.toast('Электронная почта', 'Адресс электронной почты был скопирован');
    };

    /**
     * Copies the phone number and toasts about it
     * @callback
     */
    onCopyTelClick = () => {
        copyToClipboard('+7(999)515-42-17');
        this.props.toast('Номер телефона', 'Номер телефона был скопирован');
    };

    render() {
        return (
            <div className="contacts__column vcard" itemScope itemType="http://schema.org/Organization">
                <h3 className="contacts__column_title">Контакты</h3>
                <h1 className="contacts__name fn org" itemProp="name">Мельникова Татьяна</h1>
                <this.Contacts />
                <this.Address />
                <this.Social />
                <span className="url">
                    <span className="value-title" title="https://myinspire-ph.ru/" />
                </span>
            </div>
        );
    }
}

ContactsCard.propTypes = {
    toast: PropTypes.func.isRequired,
};
