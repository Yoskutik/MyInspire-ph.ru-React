import PropTypes from 'prop-types';
import React from 'react';

/**
 * Creates a component for the images. If there's only one image - makes
 * it big. In the other case creates a column of small extra images.
 * @param {Object} props
 * @param {Array<String>} props.photos - the list of photos of the hall.
 * @component
 */
const Preview = ({ photos }) => {
  const extraImages = photos.length > 1
    ? (
      <div className="list__item_extra-images">
        {photos.map((photo, i) => (
          <img alt="Фотография зала"
               src={`photos/${photo}`}
               key={Math.random()}
               className={`list__item_small-image ${i === 0 ? 'active' : ''}`} />
        ))}
      </div>
    )
    : null;
  return (
    <div className="list__item_images">
      <img alt="Фотография зала"
           src={`photos/${photos[0]}`}
           className={`list__item_main-image ${photos.length > 1 ? '' : 'single'}`} />
      {extraImages}
    </div>
  );
};

Preview.propTypes = {
  photos: PropTypes.arrayOf(String).isRequired,
};

export default Preview;
