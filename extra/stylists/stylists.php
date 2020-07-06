<?php

function createStylist($name, $type, $price, $username) {
    return "
        <div class=\"stylists__item\">
            <div class=\"stylists__item_column\">
                <h2 class=\"stylists__item_title\">$name</h2>
                <h3 class=\"stylists__item_subtitle\">$type</h3>
            </div>
            <div class=\"stylists__item_column\">
                <span>Цена: <span class=\"stylists__item_price\">$price</span></span>
                <span>
                    Контакты: <a class=\"stylists__item_instagram\" href=\"https://www.instagram.com/$username/\" target=\"_blank\">@$username</a>
                </span>
            </div>
        </div>
    ";
} ?>

<p class="intro">
    Это девушки, с которыми я работала на съёмках и за чьи работы я могу быть уверена
    и советовать их Вам как проверенных мастеров.
</p>

<div class="stylists">
    <?= createStylist('Джетт', 'Макияж', 'от 1000', 'g_hassliebe') ?>

    <?= createStylist('Аня', 'Макияж + прическа', 'полный образ от 3500', 'annsemenenko_makeup') ?>

    <?= createStylist('Настя', 'Макияж + прическа', 'полный образ от 2500', 'ru.ururu') ?>

    <p class="stylists__caption">
        * Услуги стилистов и визажистов бронируются и оплачиваются Вами отдельно. <br>
        ** Гримерка для сборов оплачивается отдельно. Обычно в студиях её цена варьируется от 200 до 300 ₽ за час.
    </p>
</div>
