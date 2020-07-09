import React from 'react';
import locations from './locations.json';

export default class Locations extends React.Component {
    Location = (props) => {
        let address = props.address.href
            ? <a href={`https://www.google.com/maps/${props.address.href}`} target="_blank">{props.address.location}</a>
            : props.address;
        let smallPhotos = props.photos.map((photo, i) =>
            <img className={`small-image ${i === 0 ? 'active' : ''}`} alt={props.title} src={`photos/${photo}.jpg`} key={i}/>
        );
        return (
            <div className="locations__item" onClick={this.onSmallImageClick}>
                <div className="locations__item_images">
                    <img className="locations__item_main-image" alt={props.title} src={`photos/${props.photos[0]}.jpg`}/>
                    <div className="locations__item_extra-images">{smallPhotos}</div>
                </div>
                <div className="locations__item_info">
                    <h2 className="locations__item_title">{props.title}</h2>
                    {props.description.map((p, i) => <p className="locations__item_description" key={i}>{p}</p>)}
                    <p className="locations__item_address">Адрес: {address}</p>
                </div>
            </div>
        )
    };

    onSmallImageClick = evt => {
        let el = evt.target;
        let item = el.closest('.locations__item');
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
                    {locations.map((location, i) =>
                        <this.Location key={i} {...location}/>
                    )}
                </div>
            </div>
        );
    }
}
