import React from 'react';
import stylists from './stylist.json';

/**
 * The main component for the extra/stylists page.
 * @component
 */
export default class Stylists extends React.Component {
    /**
     * A short intro above the list of stylists.
     * @component
     */
    Intro = () => (
        <p className="intro">
            Это девушки, с которыми я работала на съёмках и за чьи работы я могу быть уверена
            и советовать их Вам как проверенных мастеров.
        </p>
    );

    /**
     * An item from the list of stylists.
     * @param {Object} props
     * @param {String} props.name - the name of the stylist.
     * @param {String} props.type - the types of services provided.
     * @param {String} props.price - the price. It String because
     * price might be something like "starting from 100"
     * @param {String} props.username - the username of the stylist
     * from Instagram. Without '@' character.
     * @component
     */
    Stylist = props => (
        <div className="stylists__item">
            <div className="stylists__item_column">
                <h2 className="stylists__item_title">{props.name}</h2>
                <h3 className="stylists__item_subtitle">{props.type}</h3>
            </div>
            <div className="stylists__item_column">
                <span>
                    Цена:
                    <span className="stylists__item_price">{props.price}</span>
                </span>
                <span>
                    Контакты:
                    <a className="stylists__item_instagram"
                       href={`https://www.instagram.com/${props.username}/`}
                       target="_blank"
                       rel="noreferrer">
                        @
                        {props.username}
                    </a>
                </span>
            </div>
        </div>
    );

    /**
     * A caption after the list.
     * @component
     */
    Caption = () => (
        <p className="stylists__caption">
            * Услуги стилистов и визажистов бронируются и оплачиваются Вами отдельно.
            <br />
            ** Гримерка для сборов оплачивается отдельно. Обычно в студиях её цена варьируется от 200 до 300 ₽ за час.
        </p>
    );

    render() {
        return (
            <div className="body container">
                <this.Intro />
                <div className="stylists">
                    {stylists.map(stylist => <this.Stylist key={Math.random()} {...stylist} />)}
                    <this.Caption />
                </div>
            </div>
        );
    }
}
