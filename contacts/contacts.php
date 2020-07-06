<?php
function svg($id, $size) {
    return "
        <svg height=\"$size\" width=\"$size\">
            <use xlink:href=\"#$id\"></use>
        </svg>
    ";
}
?>

<div class="intro container">
    <div class="intro__container">
        <h2 class="intro__title">Запись на съёмку</h2>
        <div class="intro__text">
            <p>
                Если вы ознакомились со всеми ценами, прочли условия и осознали,
                что я - именно тот, кого Вы так давно искали, то скорее пишите мне
                в удобной Вам социальной сети и мы с Вами обсудим все детали.
            </p>
            <p>
                У меня не всегда бывает возможность моментально отвечать. Обычно
                ответ занимает не больше суток. Прошу отнестись к этому с пониманием.
            </p>
        </div>
    </div>
</div>

<div class="contacts container">
    <div class="contacts__container">
        <div class="contacts__column vcard" itemscope itemtype="http://schema.org/Organization">
            <h3 class="contacts__column_title">Контакты</h3>
            <h1 class="contacts__name fn org" itemprop="name">Мельникова Татьяна</h1>
            <div class="contacts__contacts">
                <p class="contacts__contacts_item">
                    E-mail: <a class="tel" itemprop="email" href="mailto:tatiana.mix.1910@gmail.com">tatiana.mix.1910@gmail.com</a>
                    <button class="copy copy__mail" role="button">
                        <?= svg('copy', 16) ?>
                    </button>
                </p>
                <p class="contacts__contacts_item">
                    Телефон: <a class="email" href="tel:+7(999)515-42-17" itemprop="telephone">+7(999)515-42-17</a>
                    <button class="copy copy_tel" role="button">
                        <?= svg('copy', 16) ?>
                    </button>
                </p>
                <p class="contacts__contacts_item">Для связи в WhatsApp, Telegram</p>
            </div>
            <div class="contacts__address" itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">
                <h2 class="contacts__address_city locality" itemprop="addressLocality">г. Санкт-Петербург</h2>
            </div>
            <div class="contacts__social">
                <h3 class="contacts__social_title">Социальные сети:</h3>
                <div class="contacts__social_links">
                    <a itemprop="sameAs" href="https://www.instagram.com/myinspire_ph/" target="_blank">
                        <?= svg('instagram', 38) ?>
                    </a>
                    <a itemprop="sameAs" href="https://vk.com/inspiredbyspb" target="_blank">
                        <?= svg('vk', 38) ?>
                    </a>
                    <a itemprop="sameAs" href="https://www.pinterest.ru/tatianamix1910/" target="_blank">
                        <?= svg('pinterest', 38) ?>
                    </a>
                </div>
            </div>
            <span class="url">
                <span class="value-title" title="https://myinspire-ph.ru/"></span>
            </span>
        </div>
        <div class="contacts__column">
            <h3 class="contacts__column_title">Прямая связь</h3>
            <form class="contacts__message" autocomplete="off" role="form">
                <div class="contacts__message_field">
                    <label class="contacts__message_label">
                        <input class="contacts__message_input" name="name" type="text" placeholder="Ваше имя:" required>
                    </label>
                </div>
                <div class="contacts__message_field">
                    <label class="contacts__message_label">
                        <input class="contacts__message_input" name="email" type="email" placeholder="E-mail:" required>
                    </label>
                </div>
                <div class="contacts__message_field">
                    <label class="contacts__message_label">
                        <input class="contacts__message_input" name="subject" type="text" placeholder="Тема:" required>
                    </label>
                </div>
                <div class="contacts__message_field">
                    <label class="contacts__message_label">
                        <textarea class="contacts__message_input" rows="6" name="body" placeholder="Сообщение:" required></textarea>
                    </label>
                </div>
                <input type="submit" value="Отправить" class="contacts__message_submit">
            </form>
            <p class="contacts__error-message required">* Заполните, пожалуйста, все поля</p>
            <p class="contacts__error-message mail">* Поле почты заполненно неверно</p>
        </div>
    </div>
</div>

<template id="toast">
    <div class="toast" role="alert">
        <div class="toast__header">
            <strong class="toast__title"></strong>
            <button type="button" class="close">&times;</button>
        </div>
        <div class="toast__body"></div>
    </div>
</template>
