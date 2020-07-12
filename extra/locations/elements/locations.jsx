import React from 'react';
import locations from './locations.json';

/**
 * The main component for the extra/locations page.
 * @component
 */
export default class Locations extends React.Component {
    /**
     *
     * @param {Object} props
     * @param {String} props.title - the title of the location.
     * @param {{location: String, href: String}} props.address - the name of the location and
     * the link from Google Maps to it (without extra "https://www.google.com/maps/").
     * @param {Array<String>} props.description - a list of paragraphs in the description.
     * @param {Array<String>} props.photos - a list of photos names of this location.
     * @component
     */
    Location = props => {
        const address = props.address.href
            ? (
                <a href={`https://www.google.com/maps/${props.address.href}`}
                   target="_blank"
                   rel="noreferrer">
                    {props.address.location}
                </a>
            )
            : props.address;
        const smallPhotos = props.photos.map((photo, i) => (
            <img className={`small-image ${i === 0 ? 'active' : ''}`}
                 alt={props.title}
                 src={`photos/${photo}.jpg`}
                 key={Math.random()} />
        ));
        return (
            <div className="locations__item" onClick={this.onSmallImageClick}>
                <div className="locations__item_images">
                    <img className="locations__item_main-image"
                         alt={props.title}
                         src={`photos/${props.photos[0]}.jpg`} />
                    <div className="locations__item_extra-images">{smallPhotos}</div>
                </div>
                <div className="locations__item_info">
                    <h2 className="locations__item_title">{props.title}</h2>
                    {props.description.map(p => <p className="locations__item_description" key={Math.random()}>{p}</p>)}
                    <p className="locations__item_address">
                        Адрес:
                        {address}
                    </p>
                </div>
            </div>
        );
    };

    /**
     * When the small image is clicked, it should become active, and the big
     * picture should become this small picture.
     * @param {Event} evt
     * @callback
     */
    onSmallImageClick = evt => {
        const el = evt.target;
        const item = el.closest('.locations__item');
        if (el.classList.contains('small-image')) {
            item.querySelector('.active').classList.remove('active');
            el.classList.add('active');
            item.querySelector('.locations__item_main-image').src = el.src;
        }
    };

    render() {
        return (
            <div className="body">
                <div className="locations container">
                    {locations.map(location => <this.Location key={Math.random()} {...location} />)}
                </div>
            </div>
        );
    }
}
