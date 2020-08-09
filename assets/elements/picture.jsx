import PropTypes from 'prop-types';
import React from 'react';

const Picture = props => (
  <picture>
    <source srcSet={`${props.src}.webp`} type="image/webp" />
    <img className={props.className}
         alt={props.alt}
         src={`${props.src}.jpg`}
         loading={props.lazy ? 'lazy' : 'eager'} />
  </picture>
);

Picture.propTypes = {
  src: PropTypes.string.isRequired,
  className: PropTypes.string,
  lazy: PropTypes.bool,
  alt: PropTypes.string,
};

Picture.defaultProps = {
  className: '',
  lazy: false,
  alt: '',
};

export default Picture;
