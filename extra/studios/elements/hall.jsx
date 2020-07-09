import React from 'react';
import studios from "./studios.json";

export default class Hall extends React.Component {
    constructor() {
        super();
        this.onSmallImageClick = this.onSmallImageClick.bind(this);
    }

    Images = props => {
        let extraImages = props.photos.length > 1
            ? (<div className="list__item_extra-images">
                {props.photos.map((photo, i) =>
                    <img alt="Фотография" src={`photos/${photo}`} key={i}
                         className={`list__item_small-image ${i === 0 ? 'active' : ''}`}/>)}
                </div>)
            : null;
        return (
            <div className="list__item_images">
                <img alt="Фотография" src={`photos/${props.photos[0]}`}
                     className={`list__item_main-image ${props.photos.length > 1 ? '' : 'single'}`}/>
                {extraImages}
            </div>
        )
    };

    Info = props => {
        let priceFormatter = new Intl.NumberFormat('ru-RU');
        return (
            <div className="list__item_info">
                <h3 className="list__item_hall">
                    <a href={props.href} target="_blank">{props.title}</a>
                </h3>
                <span className="list__item_price">
                    {props.prices.map((price, i) =>
                        <React.Fragment key={i}>{priceFormatter.format(price)}</React.Fragment>
                    ).reduce((prev, curr) => [prev, ' / ', curr])}
                </span>
                <p className="list__item_description" dangerouslySetInnerHTML={{__html: props.description}}/>
                <div className="list__item_contacts\">
                    <strong>Контакты:</strong>
                    <p>
                        <a href={`https://www.google.com/maps/${props.address.href}`} target="_blank">
                            {props.address.location}
                        </a> <br/>
                        {(props.contacts && props.contacts.phone)
                            ? <> Телефон: <a href={`tel:${props.contacts.phone}`}>{props.contacts.phone}</a></>
                            : null}
                    </p>
                </div>
            </div>
        );
    };

    onSmallImageClick = evt => {
        let el = evt.target;
        let item = el.closest('.list__item');
        if (el.classList.contains('list__item_small-image')) {
            item.querySelector('.active').classList.remove('active');
            el.classList.add('active');
            item.querySelector('.list__item_main-image').src = el.src;
        }
    };

    render() {
        let studio = studios[this.props.studio];
        let address = this.props.address || studio.address;
        let contacts = this.props.contacts || studio.contacts;
        return (
            <div className="list__item" onClick={this.onSmallImageClick}>
                <h2 className="list__item_title">
                    <a href={studio.href} target="_blank">{this.props.studio}</a>
                </h2>
                <div className="list__item_extra">
                    <this.Images photos={this.props.photos}/>
                    <this.Info title={this.props.title} prices={this.props.prices} address={address} contacts={contacts}
                               description={this.props.description} href={this.props.href}/>
                </div>
            </div>
        );
    }
}
