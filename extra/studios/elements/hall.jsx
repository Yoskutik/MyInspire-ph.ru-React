import PropTypes from 'prop-types';
import React from 'react';
import studios from './studios.json';

/**
 * A hall - an item from the list. Each hall contains images - main and/or
 * extra images, and additional information.
 * @component
 */
export default class Hall extends React.Component {
    /**
     * Creates a component for the images. If there's only one image - makes
     * it big. In the other case creates a column of small extra images.
     * @param {Object} props
     * @param {Array<String>} props.photos - the list of photos of the hall.
     * @component
     */
    Images = props => {
        const extraImages = props.photos.length > 1
            ? (
                <div className="list__item_extra-images">
                    {props.photos.map((photo, i) => (
                        <img alt="Фотография"
                             src={`photos/${photo}`}
                             key={Math.random()}
                             className={`list__item_small-image ${i === 0 ? 'active' : ''}`} />
                  ))}
                </div>
            )
            : null;
        return (
            <div className="list__item_images">
                <img alt="Фотография"
                     src={`photos/${props.photos[0]}`}
                     className={`list__item_main-image ${props.photos.length > 1 ? '' : 'single'}`} />
                {extraImages}
            </div>
        );
    };

    /**
     * An information component. Contains information about price, hall's title and its
     * studio title as links to their website, description, and address (the title and
     * the link from Google Maps).
     * @param {Object} props
     * @param {String} props.title - the title of the hall.
     * @param {String} props.href - a link of the hall's website.
     * @param {Array<String>} props.prices - a list of prices of the hall. The price
     * can vary from day to day. E.g. one price on weekdays, other on weekends.
     * @param {{location: String, href: String}} props.address - the title of the
     * location and the link from Google Maps.
     * @param {Array<String>} props.description - a list of paragraphs for description.
     * @param {{phone: String}} props.contacts - information about contacts. For now
     * it only phone information.
     * @component
     */
    Info = props => {
        const priceFormatter = new Intl.NumberFormat('ru-RU');
        return (
            <div className="list__item_info">
                <h3 className="list__item_hall">
                    <a href={props.href} target="_blank" rel="noreferrer">{props.title}</a>
                </h3>
                <span className="list__item_price">
                    {props.prices.map(price => (
                        <React.Fragment key={Math.random()}>
                            {priceFormatter.format(+price)}
                        </React.Fragment>
                      ))
                        .reduce((prev, curr) => [prev, ' / ', curr])}
                </span>
                {/* eslint-disable-next-line react/no-danger */}
                <p className="list__item_description" dangerouslySetInnerHTML={{ __html: props.description }} />
                <div className="list__item_contacts\">
                    <strong>Контакты:</strong>
                    <p>
                        <a href={`https://www.google.com/maps/${props.address.href}`} target="_blank" rel="noreferrer">
                            {props.address.location}
                        </a>
                        <br />
                        {(props.contacts && props.contacts.phone)
                            ? (
                                <>
                                    Телефон:
                                    {' '}
                                    <a href={`tel:${props.contacts.phone}`}>{props.contacts.phone}</a>
                                </>
                            )
                            : null}
                    </p>
                </div>
            </div>
        );
    };

    /**
     * Each time small image clicked it should be switched in the active
     * mode, while other active photo is switched to a passive mode.
     * "Active" means that big image shows the image from small active one.
     * @param {Event} evt
     * @callback
     */
    onSmallImageClick = evt => {
        const el = evt.target;
        const item = el.closest('.list__item');
        if (el.classList.contains('list__item_small-image')) {
            item.querySelector('.active').classList.remove('active');
            el.classList.add('active');
            item.querySelector('.list__item_main-image').src = el.src;
        }
    };

    render() {
        const studio = studios[this.props.studio];
        if (!studio) {
            console.warn(`The studio of ${this.props.title} hasn't been found.`);
        }
        const address = this.props.address || studio.address;
        const contacts = this.props.contacts || studio.contacts;
        return (
            <div className="list__item" onClick={this.onSmallImageClick}>
                <h2 className="list__item_title">
                    <a href={studio.href} target="_blank" rel="noreferrer">{this.props.studio}</a>
                </h2>
                <div className="list__item_extra">
                    <this.Images photos={this.props.photos} />
                    <this.Info title={this.props.title}
                               prices={this.props.prices}
                               address={address}
                               contacts={contacts}
                               description={this.props.description}
                               href={this.props.href} />
                </div>
            </div>
        );
    }
}

Hall.propTypes = {
    studio: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    address: PropTypes.object,
    contacts: PropTypes.object,
    photos: PropTypes.array.isRequired,
    prices: PropTypes.array.isRequired,
    description: PropTypes.string.isRequired,
};

Hall.defaultProps = {
    address: null,
    contacts: null,
};
