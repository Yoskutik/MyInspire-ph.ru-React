<?php
function createHall($info, $photos, $contacts) {
    $hall = is_array($info['hall'])
        ? "<a href=\"{$info['hall']['href']}\" target=\"_blank\">Зал {$info['hall']['name']}</a>"
        : $info['hall'];
    $studio = is_array($info['studio'])
        ? "<a href=\"{$info['studio']['href']}\" target=\"_blank\">{$info['studio']['name']}</a>"
        : $info['studio'];
    $description = str_replace('\n', '<br>', $info['description']);
    $address = $contacts['address']
        ? is_array($contacts['address'])
            ? "Адрес: <a href=\"{$contacts['address']['href']}\" target=\"_blank\">{$contacts['address']['location']}</a><br>"
            : "Адрес: {$contacts['address']}<br>"
        : '';
    $phone_number = str_replace(['-', '(', ')'], '', $contacts['phone']);
    $phone = $contacts['phone']
        ? "Телефон: <a href=\"tel:$phone_number\">{$contacts['phone']}</a>"
        : '';
    if (!is_array($photos)) {
        $images = "<img alt=\"Фотография\" class=\"list__item_main-image single\" src=\"photos/$photos\">";
    } else {
        $images = "
            <img alt=\"Фотография\" class=\"list__item_main-image\" src=\"photos/{$photos[0]}\">
            <div class=\"list__item_extra-images\">";
        for ($i = 0; $i < count($photos); $i++) {
            if ($i == 0) {
                $images .= "<img alt=\"Фотография\" class=\"list__item_small-image active\" src=\"photos/{$photos[0]}\">";
            } else {
                $images .= "<img alt=\"Фотография\" class=\"list__item_small-image\" src=\"photos/{$photos[$i]}\">";
            }
        }
        $images .= '</div>';
    }
    $priceData = is_array($info['price']) ? $info['price'][0] : $info['price'];
    if (is_array($info['price'])) {
        $price = array_map(function ($p) {
            return number_format($p, 0, ',', ' ');
        }, $info['price']);
        $price = join(' / ', $price);
    } else {
        $price =  number_format((float)$info['price'], 0, ',', ' ');
    }
    return "
        <div class=\"list__item\" data-price=\"$priceData\" data-furniture=\"{$info['furniture']}\" data-darkness=\"{$info['darkness']}\">
            <h2 class=\"list__item_title\">$studio</h2>
            <div class=\"list__item_extra\">
                <div class=\"list__item_images\">$images</div> 
                <div class=\"list__item_info\">
                    <h3 class=\"list__item_hall\">$hall</h3>
                    <span class=\"list__item_price\">$price</span>
                    <p class=\"list__item_description\">$description</p>
                    <div class=\"list__item_contacts\">
                        <strong>Контакты:</strong>
                        <p>
                            $address
                            $phone
                        </p>
                    </div>
                </div>
            </div>
        </div>
    ";
}
function createStudio($studio, $infos, $photos, $contacts) {
    $halls = '';
    for ($i = 0; $i < count($infos); $i++) {
        $infos[$i]['studio'] = $studio;
        $halls .= createHall($infos[$i], $photos[$i], $contacts[$i] ? $contacts[$i] : $contacts);
    }
    return $halls;
}
?>

<div class="filters">
    <div class="filters__cost-n-darkness">
        <span class="filters__cost __asc" title="Сортировать по увеличению стоимости">
            <span></span><span></span><span></span>
        </span>
        <div class="filters__darkness filters__filter">
            <span class="filters__darkness_all active">Все</span>
            <span class="filters__darkness_dark">Темные</span>
            <span class="filters__darkness_light">Светлые</span>
        </div>
    </div>
    <div class="filters__furniture filters__filter">
        <span class="filters__furniture_all active">Все</span>
        <span class="filters__furniture_yes">Интерьерные</span>
        <span class="filters__furniture_no">Неинтерьерные</span>
    </div>
</div>
<div class="list">
    <?= createStudio([
        'name' => 'Art-place Faktura',
        'href' => 'https://vk.com/artplacevo'
    ], [
        [
            'hall' => ['name' => 'Амстердам', 'href' => 'https://vk.com/market-133756115?w=product-133756115_1765584'],
            'price' => 1200,
            'description' =>
                'Зал студия 80 м<sup>2</sup>, с декоративной кухней и действующим душем, а также красивый 
                балкончик с красивым видом на Неву.',
            'furniture' => 1,
            'darkness' => 0,
        ],
        [
            'hall' => ['name' => 'Лифт/Мансарда', 'href' => 'https://vk.com/market-133756115?w=product-133756115_2791641_9f16ea70fe8bc0dd79'],
            'price' => 1300,
            'description' =>
                'Большой интерьерный зал с кроватью и кирпичными стенами.',
            'furniture' => 1,
            'darkness' => 1,
        ],
        [
            'hall' => ['name' => 'Манхэттен', 'href' => 'https://vk.com/market-133756115?w=product-133756115_1692010'],
            'price' => [1500, 1700],
            'description' =>
                '120 метров пространства, спальня с камином, действующая кухня, зона спортзала.',
            'furniture' => 1,
            'darkness' => 1,
        ],
        [
            'hall' => ['name' => 'Новый', 'href' => 'https://vk.com/market-133756115?w=product-133756115_2716816'],
            'price' => 2000,
            'description' =>
                'Площадь 130 м<sup>2</sup>. Зона гостиной с камином, гардеробная, спальная зона на втором этаже, 
                и конечно же самая бомба этого зала - зона с небольшим бассейном и огромными 
                панорамным окнами с видом на финский залив. Мечта! Все кто видит зал, хотят остаться здесь жить.',
            'furniture' => 1,
            'darkness' => 1,
        ],
    ], [
        ["artplace_amst_0.jpg", "artplace_amst_1.jpg", "artplace_amst_2.jpg", "artplace_amst_3.jpg"],
        ["artplace_mans_0.jpg", "artplace_mans_1.jpg"],
        ["artplace_manh_0.jpg", "artplace_manh_1.jpg", "artplace_manh_2.jpg"],
        ["artplace_new_0.jpg", "artplace_new_1.jpg", "artplace_new_2.jpg", "artplace_new_3.jpg"],
    ], [
        'address' => [
            'location' =>'м. Василеостровская, ул. Кожевенная, д. 34',
            'href' => 'https://www.google.com/maps/place/Кожевенная+линия,+34,+Санкт-Петербург,+199106/@59.9237202,30.2422902,17z',
        ],
        'phone' => '+7(911)925-99-90',
    ])?>
    <?= createHall([
        'studio' => [
            'name' => 'ArtPro',
            'href' => 'https://artpro.photo',
        ],
        'hall' => [
            'name' => '№1',
            'href' => 'https://vk.com/market-139157544?w=product-139157544_1171806%2Fquery'
        ],
        'price' => [900, 1000],
        'description' =>
            'Зал 70 м<sup>2</sup>. Циклорама. Гримерка за час входит в стоимость. 
            Бесплатно предоставляются тканевые и бумажные фоны.',
        'furniture' => 0,
        'darkness' => 0,
    ], ['artpro_0.jpg', 'artpro_1.jpg',], [
        'address' => [
            'location' =>'м. Чкаловская, ул. Большая Разночинная, д. 24',
            'href' => 'https://www.google.com/maps/place/Большая+Разночинная+ул.,+24,+Санкт-Петербург,+197110/@59.9605047,30.2843084,17z',
        ],
        'phone' => '+7(921)907-02-53',
    ]) ?>
    <?= createStudio([
        'name' => 'BEDFORD STUDIO',
        'href' => 'https://www.bedford.studio/'
    ], [
        [
            'hall' => ['name' => 'Studio B', 'href' => 'https://vk.com/market-80652199?section=album_2&w=product-80652199_2068613%2Fquery'],
            'price' => 1000,
            'description' =>
                'Красивый и лаконичный зал 30 м<sup>2</sup> с эркером и выходом на балкон! 
                Легкий и непринужденный интерьер с лепниной и паркетом ХХ века!\n
                Окна зала выходят на солнечную сторону!',
            'furniture' => 1,
            'darkness' => 0,
        ],
        [
            'hall' => ['name' => 'Studio с', 'href' => 'https://vk.com/market-80652199?section=album_2&w=product-80652199_1704192%2Fquery'],
            'price' => 1400,
            'description' =>
                'Большой и очень светлый зал 85 м<sup>2</sup> с белой 7-метровой циклорамой! \n
                Невероятная лепнина с позолотой, роскошные и высокие потолки, и огромное количество естественного света!',
            'furniture' => 2,
            'darkness' => 0,
        ],
    ], [
        ["bedford_b_0.jpg", "bedford_b_1.jpg", "bedford_b_2.jpg"],
        ["bedford_c_0.jpg", "bedford_c_1.jpg", "bedford_c_2.jpg"],
    ], [
        'address' => [
            'location' =>'м. Чернышевская, ул. Кирочная, д. 24',
            'href' => 'https://www.google.com/maps/place/Кирочная+ул.,+24,+Санкт-Петербург,+191123/@59.944155,30.3556314,17z',
        ],
        'phone' => '+7(812)905-29-56',
    ])?>
    <?= createStudio([
        'name' => 'Grace studio',
        'href' => 'https://vk.com/gracestudiospb'
    ], [
        [
            'hall' => ['name' => 'Большой', 'href' => 'https://vk.com/market-156958510?w=product-156958510_2389260_8170a5a4424577fd92'],
            'price' => 1000,
            'description' =>
                'Зал с белой циклорамой в ширину и глубину 5 метров. \n
                В этом зале импульсный и постоянный свет, бумажные цветные фоны и фильтры.\n
                Прямые лучи с 9 до 16 часов.',
            'furniture' => 0,
            'darkness' => 0,
        ],
        [
            'hall' => ['name' => 'Маленький', 'href' => 'https://vk.com/market-156958510?w=product-156958510_2389254_1c698c3efb2db05850'],
            'price' => 800,
            'description' =>
                'Это небольшой зал 5.2х6.3 метра с деревянным полом и белыми стенами. Прямые лучи как 
                и всегда с 9 до 16 часов.\n
                Черный и серый фон.',
            'furniture' => 0,
            'darkness' => 0,
        ],
    ], [
        ["grace_big_0.jpg", "grace_big_1.jpg"],
        "grace_small_0.jpg",
    ], [
        'address' => [
            'location' => 'м. Петроградская, ул. Чапаева, д. 25',
            'href' => 'https://www.google.com/maps/place/ул.+Чапаева,+25,+Санкт-Петербург,+197101/@59.9644573,30.3284216,17z',
        ],
        'phone' => '+7(911)905-45-70',
    ])?>
    <?= createStudio([
        'name' => 'Liberty Studio',
        'href' => 'https://vk.com/studio.liberty'
    ], [
        [
            'hall' => ['name' => 'BELLA', 'href' => 'https://vk.com/market-142411368?w=product-142411368_934724'],
            'price' => [1100, 1300],
            'description' =>
                'Светлый и очень просторный зал с красивым реквизитом',
            'furniture' => 0,
            'darkness' => 0,
        ],
        [
            'hall' => ['name' => 'KARL', 'href' => 'https://vk.com/market-142411368?w=product-142411368_1021179'],
            'price' => [800, 1000],
            'description' =>
                'Очень просторный и стильный зал с красивым реквизитом',
            'furniture' => 1,
            'darkness' => 1,
        ],
    ], [
        ["liberty_bella_0.jpg", "liberty_bella_1.jpg"],
        "liberty_karl_0.jpg",
    ], [
        'address' => [
            'location' => 'м. Чкаловская, ул. Газовая, д. 10',
            'href' => 'https://www.google.com/maps/place/Газовая+ул.,+10,+Санкт-Петербург,+197136/@59.967234,30.291775,17z',
        ],
        'phone' => '+7(931)008-49-14',
    ])?>
    <?= createHall([
        'studio' => [
            'name' => 'Pavilion',
            'href' => 'http://pavilion-studio.ru/',
        ],
        'hall' => [
            'name' => 'Industry Hall',
            'href' => 'https://vk.com/market-55344392?w=product-55344392_1873943'
        ],
        'price' => [1300, 1400],
        'description' =>
            '100 м<sup>2</sup>\n
            Три больших окна. Солнечная сторона. Подиум.\n',
        'furniture' => 1,
        'darkness' => 1,
    ], ['pavilion_0.jpg', 'pavilion_1.jpg', 'pavilion_2.jpg'], [
        'address' => [
            'location' =>'м. Чкаловская, ул. Гатчинская, д. 28, вход №4',
            'href' => 'https://www.google.com/maps/place/Гатчинская+ул.,+28,+Санкт-Петербург,+196110/@59.9632987,30.2936699,17z',
        ],
        'phone' => '+7(921)449-59-38',
    ]) ?>
    <?= createStudio([
        'name' => 'Skypoint',
        'href' => 'http://www.skypointstudio.ru/'
    ], [
        [
            'hall' => ['name' => 'Balcony Room', 'href' => 'http://skypointstudio.ru/balconyroom'],
            'price' => 1300,
            'description' =>
                'Балкон с видом на Неву и мосты. Деревянный пол, лестница и кровать.
                Зал 50 м<sup>2</sup>',
            'furniture' => 1,
            'darkness' => 0,
        ], [
            'hall' => ['name' => 'Нижний', 'href' => 'http://skypointstudio.ru/lower'],
            'price' => 1400,
            'description' =>
                'Очень светлый просторный зал с различными текстурами и преметами интерьера.',
            'furniture' => 1,
            'darkness' => 1,
        ], [
            'hall' => ['name' => 'Первый этаж', 'href' => 'http://skypointstudio.ru/1etazh'],
            'price' => 1400,
            'description' =>
                'Просторный светлый зал с большим количеством окон и естественным освещением.
                Окна выходят на питерские виды.',
            'furniture' => 1,
            'darkness' => 0,
        ],
    ], [
        ["skypoint_balk_0.jpg", "skypoint_balk_1.jpg", "skypoint_balk_2.jpg", "skypoint_balk_3.jpg"],
        ["skypoint_lower_0.jpg", "skypoint_lower_1.jpg", "skypoint_lower_2.jpg"],
        ["skypoint_first_0.jpg", "skypoint_first_1.jpg", "skypoint_first_2.jpg"],
    ], [
        [
            'address' => [
                'location' => 'м. Чернышевская, наб. р. Фонтанки, д. 2',
                'href' => 'https://www.google.com/maps/place/набережная+реки+Фонтанки,+2,+Санкт-Петербург,+191187/@59.9472435,30.3347822,16.25z',
            ],
            'phone' => '+7(981)688-90-88',
        ], [
            'address' => [
                'location' => 'м. Спортивная, ул. Зверинская, д. 33',
                'href' => 'https://www.google.com/maps/place/Зверинская+ул.,+33,+Санкт-Петербург,+197198/@59.9519977,30.2938668,15z',
            ],
            'phone' => '+7(950)023-33-31',
        ], [
            'address' => [
                'location' => 'м. Адмиралтейская, наб. р. Мойки, д. 30, кв. 82',
                'href' => 'https://www.google.com/maps/place/наб.+реки+Мойки,+30,+Санкт-Петербург,+191186/@59.9394256,30.3130716,15.25z',
            ],
            'phone' => '+7(931)593-30-82',
        ],
    ])?>
    <?= createStudio([
        'name' => 'Studio 212',
        'href' => 'https://st212.com/'
    ], [
        [
            'hall' => ['name' => '96 ST.', 'href' => 'https://st212.com/studio/8'],
            'price' => 1390,
            'description' =>
                'Подвесная система бумажных фонов, две текстурные стены.',
            'furniture' => 0,
            'darkness' => 0,
        ],
    ], [["212_96_0.jpeg", "212_96_1.jpeg", "212_96_2.jpeg"]], [
        'address' => [
            'location' => 'м. Петроградская, наб. р. Карповки, д. 5, 4 этаж',
            'href' => 'https://www.google.com/maps/place/Studio+212/@59.9682216,30.3169392,18z/data=!4m5!3m4!1s0x0:0xe703c377f3424272!8m2!3d59.968342!4d30.317381',
        ],
        'phone' => '+7(812)244-21-24',
    ])?>
    <?= createHall([
        'studio' => [
            'name' => 'Как дома',
            'href' => 'https://www.instagram.com/studiokakdoma/',
        ],
        'hall' => [
            'name' => 'Как дома',
            'href' => 'https://www.instagram.com/studiokakdoma/'
        ],
        'price' => 2000,
        'description' =>
            'Уютное светлое фотопространство',
        'furniture' => 1,
        'darkness' => 0,
    ], ['kak_doma_0.jpg', 'kak_doma_1.jpg', 'kak_doma_2.jpg', 'kak_doma_3.jpg'], [
        'address' => [
            'location' =>'м. пл. Александра Невского, 8-я Советская ул., д. 54, кв. 24',
            'href' => 'https://www.google.com/maps/place/8-я+Советская+ул.,+54,+Санкт-Петербург,+191144/',
        ],
    ]) ?>
    <?= createHall([
        'studio' => [
            'name' => 'Пространство на Неве',
            'href' => 'https://www.instagram.com/prostranstvo_na_neve/',
        ],
        'hall' => [
            'name' => 'Пространство на Неве',
            'href' => 'https://www.instagram.com/prostranstvo_na_neve/'
        ],
        'price' => 2000,
        'description' =>
            'Студия, состаящая из 2 комнат. Каждая из которых являет собой отдельное пространство для съёмок.
            Одна комната представляет собой минималистичную кухню с балкончиком, выходящим на набережную Невы.
            Вторая представляет собой уютную гостинную комнату со стильной мебелью.',
        'furniture' => 1,
        'darkness' => 0,
    ], ['neva_space_0.jpg', 'neva_space_1.jpg', 'neva_space_2.jpg', 'neva_space_3.jpg'], [
        'address' => [
            'location' =>'м. Площадь Ленена, Воскресенская наб., д. 26, кв. 69 (вход со двора)',
            'href' => 'https://www.google.com/maps/place/Воскресенская+наб.,+26,+Санкт-Петербург,+191123/@59.9496029,30.352063,17.44z',
        ],
    ]) ?>
</div>
