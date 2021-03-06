import PropTypes from 'prop-types';
import React from 'react';
import FilterBtn from './filterBtn';
import FilterCostBtn from './filterCostBtn';

/**
 * @param {Object} props
 * @param {Function} props.updateFilters
 */
export default class Filters extends React.Component {
  onFilterClick = evt => {
    const el = evt.target;
    if (el.classList.contains('filter')) {
      el.parentElement.querySelector('.filter.active').classList.remove('active');
      el.classList.add('active');
    }
  };

  /**
   * @callback
   * @param {Event} evt
   */
  onSortClick = evt => {
    const el = evt.target.closest('.filters__cost');
    const { updateFilters } = this.props;
    if (!el.classList.contains('active')) {
      el.classList.add('active');
      updateFilters({
        sort: true,
        by: 'ASC',
      });
      return;
    }
    if (el.classList.contains('__asc')) {
      el.classList.remove('__asc');
      el.classList.add('__desc');
      el.title = 'Сортировать по уменьшению стоимости';
      updateFilters({ by: 'DESC' });
    } else if (el.classList.contains('__desc')) {
      el.classList.remove('__desc');
      el.classList.toggle('__asc');
      el.title = 'Сортировать по увеличению стоимости';
      updateFilters({ by: 'ASC' });
    }
  };

  render() {
    const { updateFilters } = this.props;
    return (
      <div className="filters">
        <h3 className="filters__title">
          Фильтры:
        </h3>
        <div className="filters__cost-n-darkness">
          <FilterCostBtn onSortClick={this.onSortClick} />
          <div className="filters__darkness filters__filter" onClick={this.onFilterClick}>
            <FilterBtn onClick={() => updateFilters({ darkness: null })} active>Все</FilterBtn>
            <FilterBtn onClick={() => updateFilters({ darkness: true })}>Тёмные</FilterBtn>
            <FilterBtn onClick={() => updateFilters({ darkness: false })}>Светлые</FilterBtn>
          </div>
        </div>
        <div className="filters__furniture filters__filter" onClick={this.onFilterClick}>
          <FilterBtn onClick={() => updateFilters({ furniture: null })} active>Все</FilterBtn>
          <FilterBtn onClick={() => updateFilters({ furniture: true })}>Интерьерные</FilterBtn>
          <FilterBtn onClick={() => updateFilters({ furniture: false })}>Неинтерьерные</FilterBtn>
        </div>
      </div>
    );
  }
}

Filters.propTypes = {
  updateFilters: PropTypes.func.isRequired,
};
