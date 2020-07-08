import React from 'react';
import stylists from './stylist.json';

export default class Stylists extends React.Component {
    Intro = () => (
        <p className="intro">
            Это девушки, с которыми я работала на съёмках и за чьи работы я могу быть уверена
            и советовать их Вам как проверенных мастеров.
        </p>
    );

    Stylist = props => (
        <div className="stylists__item">
            <div className="stylists__item_column">
                <h2 className="stylists__item_title">{props.name}</h2>
                <h3 className="stylists__item_subtitle">{props.type}</h3>
            </div>
            <div className="stylists__item_column">
                <span>Цена: <span className="stylists__item_price">{props.price}</span></span>
                <span>
                    Контакты:
                    <a className="stylists__item_instagram" href={`https://www.instagram.com/${props.username}/`}
                       target="_blank">@{props.username}</a>
                </span>
            </div>
        </div>
    );

    Caption = () => (
        <p className="stylists__caption">
            * Услуги стилистов и визажистов бронируются и оплачиваются Вами отдельно. <br/>
            ** Гримерка для сборов оплачивается отдельно. Обычно в студиях её цена варьируется от 200 до 300 ₽ за час.
        </p>
    );

    render() {
        return (
            <div className="body container">
                <this.Intro/>
                <div className="stylists">
                    {stylists.map((stylist, i) =>
                        <this.Stylist key={i} {...stylist}/>
                    )}
                    <this.Caption/>
                </div>
            </div>
        );
    }
}
