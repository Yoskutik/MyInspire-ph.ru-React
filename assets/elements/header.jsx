import React from 'react';

export default class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <div className="header__container container">
                    <button type="button" className="header__dropdown-btn" role="button">
                        <span/><span/><span/>
                    </button>
                    <div className="header__nav" itemScope itemType="http://schema.org/SiteNavigationElement">
                        <a itemProp="url" className="header__link" href="/"><span>Главная</span></a>
                        <a itemProp="url" className="header__link" href="/portfolio/"><span>Портфолио</span></a>
                        <a itemProp="url" className="header__link" href="/prices/"><span>Цены</span></a>
                        <a itemProp="url" className="header__link" href="/contacts/"><span>Контакты</span></a>
                    </div>
                    <h2 className="nav-link header__title" title="Фотограф в Санкт-Петербурге">MyInspire photographer</h2>
                </div>
            </header>
        )
    }
}
