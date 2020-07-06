import React from 'react';

/**
 *  A footer element. Props are not required.
 *  @component
 */
export default class Footer extends React.Component {
    /**
     * Creates a block of footer, that contains a block's title and a
     * list of links.
     * @component
     * @param {Object} props
     * @param {string} props.title - A title of block
     * @param {Array.<{title: String, href: String}>} props.links - An array of links.
     * Each sample of links array contains link's title and address.
     */
    FooterBlock = props => {
        let links = [];
        for (let i = 0; i < props.links.length; i++) {
            links.push(<a target="_blank" href={props.links[i].href} key={i * 2}>{props.links[i].title}</a>);
            if (i !== props.links.length - 1) {
                links.push(<br key={i * 2 + 1}/>);
            }
        }
        return (
            <div className="footer__block">
                <h4 className="footer__block_title">
                    <span className="footer__block_triangle"/>{props.title}
                </h4>
                <div className="footer__block_body">{links}</div>
            </div>
        )
    };

    /**
     * Creates a copyright section of Footer.
     * @component
     */
    FooterCopyright = () => (
        <span className="footer__copyright">
            <meta itemProp="copyrightYear" content="2019" />
            <meta itemProp="copyrightHolder" content="Мельникова Татьяна" />
            &copy; 2019-{new Date().getFullYear()} MyInspire-ph.ru
        </span>
    );

    /**
     * A footer click handler. Opens or closes footer blocks' links lists.
     * @param {Event} evt
     * @callback
     */
    onFooterClick = evt => {
        let element = evt.target.closest('.footer__block_title');
        if (element) {
            element.parentElement.classList.toggle('opened');
        }
    };

    render() {
        return (
            <footer className="footer" itemScope itemType="http://schema.org/WPFooter" onClick={this.onFooterClick}>
                <div className="footer__container container">
                    <this.FooterBlock title="Contacts" links={[
                        {title: 'Instagram', href: 'https://www.instagram.com/myinspire_ph/'},
                        {title: 'VK', href: 'https://vk.com/inspiredbyspb'},
                        {title: 'Telegram', href: 'https://t.me/MyInspire_ph'},
                        {title: 'WhatsApp', href: 'https://wa.me/79995154217'},
                        {title: 'E-mail', href: 'mailto:tatiana.mix.1910@gmail.com'},
                    ]} />
                    <this.FooterBlock title="Developer" links={[
                        {title: 'GitHub', href: 'https://www.github.com/yoskutik'},
                        {title: 'StackOverflow', href: 'https://stackoverflow.com/users/11589183/yoskutik'},
                        {title: 'Habr', href: 'https://habr.com/ru/users/yoskutik/'},
                    ]}/>
                    <this.FooterBlock title="Icons" links={[
                        {title: 'By Freepik', href: 'https://www.freepik.com/'},
                        {title: 'From www.flaticon.com', href: 'https://www.flaticon.com/'},
                        {title: 'Licensed by CC 3.0 BY', href: 'http://creativecommons.org/licenses/by/3.0/'},
                    ]}/>
                    <this.FooterCopyright/>
                </div>
            </footer>
        )
    }
}
