import PropTypes from 'prop-types';
import React from 'react';
import Picture from '@elements/picture';

/**
 * Creates a sample of genres. Each sample must have an image and
 * a description.
 * @param {Object} props
 * @param {String} props.imgSrc - a source of the image.
 * @param {String} props.alt - alt of image.
 * @param {Array<String>} props.paragraphs - an array of paragraphs which
 * are stored in the genre description.
 * @component
 */
const Genre = props => (
  <div className="genres__container container">
    <div className="genres__genre">
      <div className="genres__container_photo">
        <Picture alt={props.alt} src={props.imgSrc} />
      </div>
      <div className="genres__container_info">
        <h3 className="genres__container_title">{props.title}</h3>
        {props.paragraphs.map(p => (
          <p className="genres__container_paragraph" key={Math.random()}>
            {p}
          </p>
        ))}
      </div>
    </div>
  </div>
);

Genre.propTypes = {
  alt: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  paragraphs: PropTypes.arrayOf(String).isRequired,
};

export default Genre;
