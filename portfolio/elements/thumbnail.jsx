import PropTypes from 'prop-types';
import React from 'react';
import Picture from '@elements/picture';

const Thumbnail = ({ title, onClick }) => (
  <div className="item thumbnail" onClick={onClick} role="button" tabIndex="0">
    <div className="item__photo">
      <Picture alt={title.replace(/\d+/, '')} src={`photos/thumbnails/${title}`} />
      <div className="item__title">{title.replace(/\d+/, '')}</div>
    </div>
  </div>
);

Thumbnail.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Thumbnail;
