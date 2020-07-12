import PropTypes from 'prop-types';
import React from 'react';

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
                <div className="filters__cost-n-darkness">
                    <span className="filters__cost __asc"
                          title="Сортировать по увеличению стоимости"
                          onClick={this.onSortClick.bind(this)}>
                        <span />
                        <span />
                        <span />
                    </span>
                    <div className="filters__darkness filters__filter" onClick={this.onFilterClick}>
                        <span className="filter active" onClick={() => updateFilters({ darkness: null })}>
                            Все
                        </span>
                        <span className="filter" onClick={() => updateFilters({ darkness: true })}>
                            Темные
                        </span>
                        <span className="filter" onClick={() => updateFilters({ darkness: false })}>
                            Светлые
                        </span>
                    </div>
                </div>
                <div className="filters__furniture filters__filter" onClick={this.onFilterClick}>
                    <span className="filter active" onClick={() => updateFilters({ furniture: null })}>
                        Все
                    </span>
                    <span className="filter" onClick={() => updateFilters({ furniture: true })}>
                        Интерьерные
                    </span>
                    <span className="filter" onClick={() => updateFilters({ furniture: false })}>
                        Неинтерьерные
                    </span>
                </div>
            </div>
        );
    }
}

Filters.propTypes = {
    updateFilters: PropTypes.func.isRequired,
};
