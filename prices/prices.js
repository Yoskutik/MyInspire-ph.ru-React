'use strict';

document.on('DOMContentLoaded', () => {
    $('.list').on('click', evt => {
        let item = evt.target.closest('.list__item');

        if (item) {
            if (item.classList.contains('opened')) {
                item.css({'max-height': '2rem'});
            } else {
                item.css({'max-height': item.scrollHeight + 'px'});
            }
            item.classList.toggle('opened');
        }
    });
});
