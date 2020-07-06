'use strict';

document.on('DOMContentLoaded', () => {
    for (let item of $$('.locations__item')) {
        item.on('click', evt => {
            let el = evt.target;
            if (el.classList.contains('small-image')) {
                item.querySelector('.active').classList.remove('active');
                el.classList.add('active');
                item.querySelector('.locations__item_main-image').src = el.src;
            }
        })
    }
});
