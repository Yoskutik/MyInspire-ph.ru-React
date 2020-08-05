import PropTypes from 'prop-types';
import React from 'react';

const Image = ({ src, alt }) => (
  <picture>
    <source srcSet={`${src}.webp`} type="image/webp" />
    <img className="collage__img"
         alt={alt}
         src={`${src}.jpg`}
         onTransitionEnd={evt => evt.target.parentElement.remove()} />
  </picture>
);

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

Image.defaultProps = {
  alt: '',
};

export default Image;
