import PropTypes from 'prop-types';
import React from 'react';

const Image = ({ src, alt, onLoad }) => (
  <picture>
    <source srcSet={`${src}.webp`} type="image/webp" />
    <img className="collage__img"
         alt={alt}
         src={`${src}.jpg`}
         onTransitionEnd={evt => evt.target.parentElement.remove()}
         onLoad={onLoad} />
  </picture>
);

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  onLoad: PropTypes.func,
};

Image.defaultProps = {
  alt: '',
  onLoad: null,
};

export default Image;
