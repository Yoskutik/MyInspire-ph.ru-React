import React from 'react';
import {CopyIcon, InstagramIcon, PinterestIcon, VKIcon} from '../../assets/elements/icons';
import {copyToClipboard} from "../../assets/utils";

export default class ContactsCard extends React.Component {
    constructor(props) {
        super(props);
        this.onCopyTelClick = this.onCopyTelClick.bind(this);
        this.onCopyEmailClick = this.onCopyEmailClick.bind(this);
    }

    Contacts = () => (
        <div className="contacts__contacts">
            <p className="contacts__contacts_item">
                E-mail: <a className="email" itemProp="email"
                           href="mailto:tatiana.mix.1910@gmail.com">tatiana.mix.1910@gmail.com</a>
                <button className="copy copy__mail" onClick={this.onCopyEmailClick}>
                    <CopyIcon width="16" height="16"/>
                </button>
            </p>
            <p className="contacts__contacts_item">
                Телефон: <a className="tel" href="tel:+7(999)515-42-17" itemProp="telephone">+7(999)515-42-17</a>
                <button className="copy copy__tel" onClick={this.onCopyTelClick}>
                    <CopyIcon width="16" height="16"/>
                </button>
            </p>
            <p className="contacts__contacts_item">Для связи в WhatsApp, Telegram</p>
        </div>
    );

    Address = () => (
        <div className="contacts__address" itemProp="address" itemScope itemType="http://schema.org/PostalAddress">
            <h2 className="contacts__address_city locality" itemProp="addressLocality">г. Санкт-Петербург</h2>
        </div>
    );

    Social = () => (
        <div className="contacts__social">
            <h3 className="contacts__social_title">Социальные сети:</h3>
            <div className="contacts__social_links">
                <a itemProp="sameAs" href="https://www.instagram.com/myinspire_ph/" target="_blank">
                    <InstagramIcon width="38" height="38"/>
                </a>
                <a itemProp="sameAs" href="https://vk.com/inspiredbyspb" target="_blank">
                    <VKIcon width="38" height="38"/>
                </a>
                <a itemProp="sameAs" href="https://www.pinterest.ru/tatianamix1910/" target="_blank">
                    <PinterestIcon width="38" height="38"/>
                </a>
            </div>
        </div>
    );

    onCopyEmailClick = () => {
        copyToClipboard('tatiana.mix.1910@gmail.com');
        this.props.toast('Электронная почта', 'Адресс электронной почты был скопирован')
    };

    onCopyTelClick = () => {
        copyToClipboard('+7(999)515-42-17');
        this.props.toast('Номер телефона', 'Номер телефона был скопирован');
    };

    render() {
        return (
            <div className="contacts__column vcard" itemScope itemType="http://schema.org/Organization">
                <h3 className="contacts__column_title">Контакты</h3>
                <h1 className="contacts__name fn org" itemProp="name">Мельникова Татьяна</h1>
                <this.Contacts/>
                <this.Address/>
                <this.Social/>
                <span className="url">
                    <span className="value-title" title="https://myinspire-ph.ru/"/>
                </span>
            </div>
        );
    }
}
