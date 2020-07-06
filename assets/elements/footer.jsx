import React from 'react';

export default class Footer extends React.Component {
    FooterBlock = function (props) {
        let links = [];
        for (let i = 0; i < props.links.length; i++) {
            links.push(<a target="_blank" href={links[i].href} key={i}>{links[i].title}</a>);
            if (i !== props.links.length - 1) {
                links.push(<br/>);
            }
        }
        return (
            <>
                <h4 className="footer__block_title">
                    <span className="footer__block_triangle"/>{props.title}
                </h4>
                <div className="footer__block_body">{links}</div>
            </>
        )
    };

    render() {
        return (
            <footer className="footer" itemScope itemType="http://schema.org/WPFooter">
                <div className="footer__container container">
                    <div className="footer__block">
                        <h4 className="footer__block_title">
                            <span className="footer__block_triangle"/>
                            Contacts
                        </h4>
                        <div className="footer__block_body">
                            <a target="_blank" href="https://www.instagram.com/myinspire_ph/">Instagram</a>
                            <br/>
                            <a target="_blank" href="https://vk.com/inspiredbyspb">VK</a>
                            <br/>
                            <a href="https://t.me/MyInspire_ph" target="_blank">Telegram</a>
                            <br/>
                            <a href="https://wa.me/79995154217" target="_blank">WhatsApp</a>
                            <br/>
                            <a href="mailto:tatiana.mix.1910@gmail.com">E-mail</a>
                        </div>
                    </div>
                    <div className="footer__block">
                        <h4 className="footer__block_title">
                            <span className="footer__block_triangle"/>
                            Developer
                        </h4>
                        <div className="footer__block_body">
                            {/* Я не уверен, что это сработает, но вроде как наличие ссылок на "хорошие" сайты */}
                            {/* улучшает ранжирование. */}
                            <a href="https://www.github.com/yoskutik" target="_blank">GitHub</a><br/>
                            <a href="https://stackoverflow.com/users/11589183/yoskutik"
                               target="_blank">StackOverflow</a><br/>
                            <a href="https://habr.com/ru/users/yoskutik/" target="_blank">Habr</a>
                        </div>
                    </div>
                    <div className="footer__block">
                        <h4 className="footer__block_title">
                            <span className="footer__block_triangle"/>
                            Icons
                        </h4>
                        <div className="footer__block_body">
                            By <a href="https://www.freepik.com/" title="Freepik" target="_blank">Freepik</a><br/>
                            From <a href="https://www.flaticon.com/" title="Flaticon"
                                    target="_blank">www.flaticon.com</a><br/>
                            Licensed by <a href="http://creativecommons.org/licenses/by/3.0/"
                                           title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>
                        </div>
                    </div>
                    <span className="footer__copyright">
                        <meta itemProp="copyrightYear" content="2019" />
                        <meta itemProp="copyrightHolder" content="Мельникова Татьяна" />
                        &copy; 2019-{new Date().getFullYear()} MyInspire-ph.ru
                    </span>
                </div>
            </footer>
        )
    }
}
