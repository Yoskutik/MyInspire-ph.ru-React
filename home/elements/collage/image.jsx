import PropTypes from 'prop-types';
import React from 'react';

const onTransitionEnd = evt => {
  const el = evt.target;
  if (el.style.opacity === '0') {
    el.parentElement.remove();
  }
};

const Image = ({ src, alt, onLoad }) => (
  <picture>
    <source srcSet={`${src}.webp`} type="image/webp" />
    <img className="collage__img"
         alt={alt}
         src={`${src}.jpg`}
         onTransitionEnd={onTransitionEnd}
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
