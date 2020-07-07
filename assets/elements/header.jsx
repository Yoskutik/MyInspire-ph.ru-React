import React from 'react';
import $ from 'jquery';

/**
 * A Header element. Contains a button (that opens dropdown list)
 * and a list of navigation links. The menu inside the Header may
 * be in 2 states: usual menu and dropdown one (if width of the
 * window narrow enough).
 * @component
 */
export default class Header extends React.Component {
    /**
     * Creates navigation links
     * @param {{title: String, href: String}} props
     */
    HeaderLink = props => (
        <a itemProp="url" className="header__link" href={props.href}><span>{props.title}</span></a>
    );

    /**
     * A dropdown menu popup handler. Each time user clicks
     * somewhere except dropdown menu, it become hidden.
     * @param {Event} evt
     * @callback
     */
    onMenuPopup = evt => {
        if (!evt.target.closest('.header__nav')) {
            $('.header__nav').hide();
            $(document).off('click', this.onMenuPopup);
        }
    };

    /**
     * A dropdown menu click handler. Opens or closes a
     * dropdown menu.
     * @callback
     */
    onDropdownBtnClick = () => {
        let nav = $('.header__nav');
        if (nav.is(':visible')) {
            $(document).off('click', this.onMenuPopup);
            nav.hide();
        } else {
            setTimeout(() => $(document).on('click', this.onMenuPopup));
            nav.css({display: 'flex'});
        }
    };

    render() {
        return (
            <header className="header">
                <div className="header__container container">
                    <button type="button" className="header__dropdown-btn" onClick={this.onDropdownBtnClick}>
                        <span/><span/><span/>
                    </button>
                    <div className="header__nav" itemScope itemType="http://schema.org/SiteNavigationElement">
                        <this.HeaderLink title="Главная" href="/"/>
                        <this.HeaderLink title="Портфолио" href="/portfolio/"/>
                        <this.HeaderLink title="Цены" href="/prices/"/>
                        <this.HeaderLink title="Контакты" href="/contacts/"/>
                    </div>
                    <h2 className="nav-link header__title" title="Фотограф в Санкт-Петербурге">MyInspire photographer</h2>
                </div>
            </header>
        )
    }
}
