import React from 'react';
import '@styles/header.scss';

/**
 * A Header element. Contains a button (that opens dropdown list)
 * and a list of navigation links. The menu inside the Header may
 * be in 2 states: usual menu and dropdown one (if width of the
 * window narrow enough).
 * @component
 */
export default class Header extends React.Component {
  constructor() {
    super();
    this.nav = React.createRef();
  }

  /**
   * Creates navigation links
   * @param {{title: String, href: String}} props
   */
  HeaderLink = props => (
    <a itemProp="url" className="header__link" href={props.href}><span>{props.title}</span></a>
  );

  onMenuPopup = evt => {
    if (!evt.target.closest('.header__nav')) {
      this.nav.current.style.display = 'none';
      document.removeEventListener('click', this.onMenuPopup);
    }
  };

  onDropdownBtnClick = () => {
    const nav = this.nav.current;
    if (nav.style.display === 'flex') {
      document.removeEventListener('click', this.onMenuPopup);
      this.nav.current.style.display = '';
    } else {
      setTimeout(() => document.addEventListener('click', this.onMenuPopup));
      nav.style.display = 'flex';
    }
  };

  render() {
    return (
      <header className="header">
        <div className="header__container container">
          <button type="button" className="header__dropdown-btn" onClick={this.onDropdownBtnClick}>
            <span />
            <span />
            <span />
          </button>
          <div className="header__nav" itemScope itemType="http://schema.org/SiteNavigationElement" ref={this.nav}>
            <this.HeaderLink title="Главная" href="/" />
            <this.HeaderLink title="Портфолио" href="/portfolio/" />
            <this.HeaderLink title="Цены" href="/prices/" />
            <this.HeaderLink title="Контакты" href="/contacts/" />
          </div>
          <h2 className="nav-link header__title" title="Фотограф в Санкт-Петербурге">
            MyInspire photographer
          </h2>
        </div>
      </header>
    );
  }
}
