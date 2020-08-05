import React from 'react';
import avatarJPG from '@assets/photos/ava.jpg';
import avatarWEBP from '@assets/photos/ava.webp';
import { InstagramIcon, VKIcon, WhatsAppIcon } from '@elements/icons';

/**
 * A part of Info element. Contains photographer's avatar image,
 * name, and contacts.
 * @component
 */
const InfoCard = () => (
  <div className="info__card" itemScope itemType="http://schema.org/Organization">
    <link itemProp="url" href="https://myinspire-ph.ru/" />
    <div className="info__card_avatar">
      <picture>
        <source srcSet={avatarWEBP} type="image/webp" />
        <img itemProp="image" alt="Мельникова Татьяна" src={avatarJPG} />
      </picture>
    </div>
    <div className="info__card_message">
      <h2 itemProp="name" className="info__card_title">Мельникова Татьяна</h2>
      <h1 itemProp="jobTitle" className="info__card_subtitle">Фотограф в Санкт-Петербурге</h1>
      <p className="info__card_extra">Индивидуальные фотосессии и love-story.</p>
      <div className="info__card_social">
        <a itemProp="sameAs"
           href="https://www.instagram.com/myinspire_ph/"
           target="_blank"
           rel="noreferrer">
          <InstagramIcon />
        </a>
        <a itemProp="sameAs" href="https://vk.com/inspiredbyspb/" target="_blank" rel="noreferrer">
          <VKIcon />
        </a>
        <a itemProp="sameAs" href="https://wa.me/79995154217" target="_blank" rel="noreferrer">
          <WhatsAppIcon />
        </a>
      </div>
    </div>
  </div>
);

export default InfoCard;
