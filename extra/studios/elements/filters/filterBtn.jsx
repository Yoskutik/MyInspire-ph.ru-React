import PropTypes from 'prop-types';
import React from 'react';

const FilterBtn = ({ active, onClick, children }) => (
  <span className={`filter ${active ? 'active' : ''}`}
        onClick={onClick}
        role="button"
        tabIndex="0">
    {children}
  </span>
);

FilterBtn.propTypes = {
  active: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
};

FilterBtn.defaultProps = {
  active: false,
};

export default FilterBtn;
