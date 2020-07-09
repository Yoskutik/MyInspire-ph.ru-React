import React from 'react';

export default class Filters extends React.Component {
    onFilterClick = evt => {
        let el = evt.target;
        if (el.classList.contains('filter')) {
            el.parentElement.querySelector('.filter.active').classList.remove('active');
            el.classList.add('active')
        }
    };

    onSortClick = evt => {
        let el = evt.target.closest('.filters__cost');
        if (!el.classList.contains('active')) {
            el.classList.add('active');
            this.props.updateFilters({
                sort: true,
                by: 'ASC',
            });
            return;
        }
        if (el.classList.contains('__asc')) {
            el.classList.remove('__asc');
            el.classList.add('__desc');
            el.title = 'Сортировать по уменьшению стоимости';
            this.props.updateFilters({by: 'DESC'})
        } else if (el.classList.contains('__desc')) {
            el.classList.remove('__desc');
            el.classList.toggle('__asc');
            el.title = 'Сортировать по увеличению стоимости';
            this.props.updateFilters({by: 'ASC'})
        }
    };

    render() {
        let updateFilters = this.props.updateFilters;
        return (
            <div className="filters">
                <div className="filters__cost-n-darkness">
                <span className="filters__cost __asc" title="Сортировать по увеличению стоимости"
                      onClick={this.onSortClick.bind(this)}>
                    <span/><span/><span/>
                </span>
                    <div className="filters__darkness filters__filter" onClick={this.onFilterClick}>
                        <span className="filter active" onClick={() => updateFilters({darkness: null})}>
                            Все
                        </span>
                        <span className="filter" onClick={() => updateFilters({darkness: true})}>
                            Темные
                        </span>
                        <span className="filter" onClick={() => updateFilters({darkness: false})}>
                            Светлые
                        </span>
                    </div>
                </div>
                <div className="filters__furniture filters__filter" onClick={this.onFilterClick}>
                    <span className="filter active" onClick={() => updateFilters({furniture: null})}>
                        Все
                    </span>
                    <span className="filter" onClick={() => updateFilters({furniture: true})}>
                        Интерьерные
                    </span>
                    <span className="filter" onClick={() => updateFilters({furniture: false})}>
                        Неинтерьерные
                    </span>
                </div>
            </div>
        );
    }
}
