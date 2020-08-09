import PropTypes from 'prop-types';
import React from 'react';
import { ArrowIcon } from '@elements/icons';
import Picture from '@elements/picture';

/**
 * @param {String} props.title - the title of the location.
 * @param {{location: String, href: String}} props.address - the name of the location and
 * the link from Google Maps to it (without extra "https://www.google.com/maps/").
 * @param {Array<String>} props.locations - a list of locations.
 * @param {String} props.photos_dir - name of photos directory
 * @param {Array<String>} props.photosList - list of photos paths without directory
 * @param {Number} props.time_needed - needed time for the path.
 * @component
 */
const Location = props => {
  const photos = props.photosList;
  const smallPhotosComponent = photos.map((photo, i) => (
    <Picture className={`small-image ${i === 0 ? 'active' : ''}`}
             alt={props.title}
             src={`photos/${props.photos_dir}/${photo}m`}
             key={Math.random()}
             lazy={i > 3} />
  ));
  let duration;
  switch (props.duration) {
  case 1:
    duration = 'Идеален для Фотопрогулки mini';
    break;
  case 2:
    duration = 'При заказе Фотопрогулки mini локации проходятся не в полном объёме, '
      + 'поэтому если есть в списке локаций ваш фаворит, то предупредите меня об этом заранее.';
    break;
  default:
    duration = null;
    break;
  }
  return (
    <div className="location" onClick={props.onClick}>
      <div className="location__photos">
        <Picture className="location__photos_main"
                 alt={props.title}
                 src={`photos/${props.photos_dir}/${photos[0]}`} />
        <div className="location__photos_extra">
          <ArrowIcon className="arrow arrow-up" size="12" />
          <div className="location__photos_extra--photos">
            {smallPhotosComponent}
          </div>
          <ArrowIcon className="arrow arrow-down" size="12" />
        </div>
      </div>
      <div className="location__info">
        <h2 className="location__info_title">{props.title}</h2>
        Локации маршута:
        <ul className="location__info_list">
          {props.locations.map(l => <li key={Math.random()}>{l}</li>)}
        </ul>
        <p>
          {`Время на перемещение: ${props.time_needed} мин.`}
        </p>
        {duration}
        <p className="location__info_address">
          Адрес:
          {' '}
          <a href={`https://www.google.com/maps/${props.address.href}`}
             target="_blank"
             rel="noreferrer">
            {props.address.location}
          </a>
        </p>
      </div>
    </div>
  );
};

Location.propTypes = {
  title: PropTypes.string.isRequired,
  photosList: PropTypes.arrayOf(String).isRequired,
  photos_dir: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  locations: PropTypes.arrayOf(String).isRequired,
  time_needed: PropTypes.number.isRequired,
  address: PropTypes.object.isRequired,
  duration: PropTypes.number.isRequired,
};

export default Location;
