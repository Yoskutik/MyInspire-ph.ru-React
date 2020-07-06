import React from 'react';
import Genres from './genres';
import { CopyIcon } from '../../assets/elements/icons.jsx';

export default class Home extends React.Component {
    Collage = () =>  (
        <div className="collage">
            <img className="collage__img" alt="" src=""/>
            <img className="collage__img" alt="" src=""/>
        </div>
    );

    InfoMessage = () => (
        <div className="info__message">
            <h3 className="info__message_title">Обо мне</h3>
            <p>
                Предоставляю услуги профессионального фотографа. Занимаюсь
                организацией съёмок в студиях и на улице уже около двух лет.
                Сотрудничаю с профессиональными визажистами и стилистами.
                Снимаю портреты в различных стилях, провожу съёмки в стиле
                Love Story, занимаюсь проведением фотопрогулок.
            </p>
            <p>
                Работая с каждым человеком, я стараюсь, чтобы он раскрылся,
                чтобы у него остались самые приятные воспоминания в виде
                фотографий от меня. Если Вам нужна фотосессия в студии — я
                готова предоставить свою базу проверенных фотостудий в
                Санкт-Петербурге. Если Вы приехали в город и желаете получить
                фотографии на фоне самых известных достопримечательностей —
                я помогу составить Вам наиболее комфортный маршрут по городу.
            </p>
            <p>
                Фотография — это то, чем я живу. Ни проходит ни дня, когда бы
                я не занималась все большим погружением в эту сферу или
                проведением творческих съёмок. Портрет — это одна из тех вещей,
                которая может по-настоящему раскрыть всю красоту человека. Для
                меня фотография — это искусство. И я сделаю все возможное,
                чтобы Вы стали его частью.
            </p>
            <p>
                Со всеми моими работами в высоком разрешении можно ознакомиться
                по <a href="/portfolio">ссылке</a>.
            </p>
        </div>
    );

    InfoCard = () => (
        <div className="info__card" itemScope itemType="http://schema.org/Organization">
            <link itemProp="url" href="https://myinspire-ph.ru/"/>
            <div className="info__card_avatar">
                <img itemProp="image" alt="Мельникова Татьяна" src="/assets/ava.png" />
            </div>
            <div className="info__card_message">
                <h2 itemProp="name" className="info__card_title">Мельникова Татьяна</h2>
                <h1 itemProp="jobTitle" className="info__card_subtitle">Фотограф в Санкт-Петербурге</h1>
                <p className="info__card_extra">Индивидуальные фотосессии и love-story.</p>
                <div className="info__card_social">
                    <a itemProp="sameAs" href="https://www.instagram.com/myinspire_ph/" target="_blank">
                        <CopyIcon height="38" width="38"/>
                    </a>
                    <a itemProp="sameAs" href="https://vk.com/inspiredbyspb/" target="_blank">
                        <CopyIcon height="38" width="38"/>
                    </a>
                    <a itemProp="sameAs" href="https://wa.me/79995154217" target="_blank">
                        <CopyIcon height="38" width="38"/>
                    </a>
                </div>
            </div>
        </div>
    );

    render() {
        return (
            <div className="body">
                <this.Collage/>

                <div className="info">
                    <div className="info__container container">
                        <this.InfoMessage/>
                        <this.InfoCard/>
                    </div>
                </div>

                <Genres/>
            </div>
        );
    }
}
