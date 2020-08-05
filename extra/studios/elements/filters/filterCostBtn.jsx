import PropTypes from 'prop-types';
import React from 'react';

const FilterCostBtn = ({ onSortClick }) => (
  <span className="filters__cost __asc filter"
        title="Сортировать по увеличению стоимости"
        onClick={onSortClick}
        role="button"
        tabIndex="0">
    <span />
    <span />
    <span />
  </span>
);

FilterCostBtn.propTypes = {
  onSortClick: PropTypes.func.isRequired,
};

export default FilterCostBtn;
