import PropTypes from 'prop-types';
import React from 'react';

const Image = ({ src }) => (
    <picture>
        <source srcSet={`${src}.webp`} type="image/webp" />
        <img className="collage__img" alt="" src={`${src}.jpg`} onTransitionEnd={evt => evt.target.remove()} />
    </picture>
);

Image.propTypes = {
    src: PropTypes.string.isRequired,
};

export default Image;
