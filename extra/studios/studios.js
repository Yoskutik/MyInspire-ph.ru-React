'use strict';

document.on('DOMContentLoaded', () => {
    for (let item of $$('.list__item')) {
        item.on('click', evt => {
            let el = evt.target;
            if (el.classList.contains('list__item_small-image')) {
                item.querySelector('.active').classList.remove('active');
                el.classList.add('active');
                item.querySelector('.list__item_main-image').src = el.src;
            }
        })
    }

    $$('.filters__filter').on('click', evt => {
        let el = evt.target;
        if (el.tagName.toLowerCase() === 'span') {
            el.parentElement.querySelector('.active').classList.remove('active');
            el.classList.add('active');

            reset();
            sort();
        }
    });

    let filters = {
        darkness: null,
        furniture: null,
        sort: 1,
    };

    $('.filters__darkness_all').on('click', () => filters.darkness = null);
    $('.filters__darkness_dark').on('click', () => filters.darkness = 1);
    $('.filters__darkness_light').on('click', () => filters.darkness = 0);

    $('.filters__furniture_all').on('click', () => filters.furniture = null);
    $('.filters__furniture_yes').on('click', () => filters.furniture = 1);
    $('.filters__furniture_no').on('click', () => filters.furniture = 0);

    let reset = () => {
        $$('.list__item_title').css({display: 'block'});
        $$('.list__item').css({display: 'block'});
    };

    let sort = () => {
        for (let item of $$('.list__item')) {
            let furniture = parseInt(item.dataset.furniture);
            let darkness = parseInt(item.dataset.darkness);
            if (filters.furniture !== null && furniture !== 2 && furniture !== filters.furniture) {
                item.hide();
            }
            if (filters.darkness !== null && darkness !== 2 && darkness !== filters.darkness) {
                item.hide();
            }
        }
        let items = $$('.list__item .list__item_title');
        items = [...items].filter(el => el.parentElement.style.display !== 'none');
        for (let i = 0; i < items.length; i++) {
            if (i === 0) continue;
            if (items[i - 1].textContent === items[i].textContent) {
                items[i].hide();
            }
        }
    };

    $('.filters__cost').on('click', function () {
        reset();
        let elements = $$('.list__item');
        elements = [].slice.call(elements);
        elements.sort((a, b) => {
            if (parseInt(a.dataset['price']) > parseInt(b.dataset['price'])) {
                return filters.sort;
            }
            if (parseInt(a.dataset['price']) < parseInt(b.dataset['price'])) {
                return -filters.sort;
            }
            return 0;
        });
        $$('.list__item').remove();
        for (let elem of elements) {
            $('.list').appendChild(elem);
        }
        filters.sort *= -1;
        this.title = filters.sort > 0
            ? 'Сортировать по увеличению стоимости'
            : 'Сортировать по уменьшению стоимости';
        sort();
        if (!this.classList.contains('active')) {
            this.classList.add('active');
            return;
        }
        this.classList.toggle('__asc');
        this.classList.toggle('__desc');
    });
});
