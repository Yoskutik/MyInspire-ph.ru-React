import React from 'react';
import ReactDOM from 'react-dom';
import Body from '@elements/body';

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        <Body>
            <div className="body">
                <div className="block">
                    <nav className="nav">
                        <a className="nav__link" href="studios/">Студии</a>
                        <a className="nav__link" href="locations/">Локации для фотопрогулки</a>
                        <a className="nav__link" href="poses/">Шпаргалка по позированию</a>
                        <a className="nav__link" href="stylists/">Контакты визажистов и стилистов</a>
                    </nav>
                </div>
            </div>
        </Body>,
        document.querySelector('#body'),
    );
});
