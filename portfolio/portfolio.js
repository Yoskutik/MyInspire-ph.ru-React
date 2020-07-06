'use strict';

document.on('DOMContentLoaded' , () => {
    window
        .on('resize', () => {
            let perRow = innerWidth < 580 ? 1 : 2;
            let width = $('.block').clientWidth;
            let size = width / perRow;
            $$('.photo').forEach(el => {
                let margin = 0;
                // let margin = 2 * parseInt(el.parentElement.style['margin-left']);
                el.css({
                    width: size - margin + 'px',
                    height: size - margin + 'px',
                });
                el.parentElement.css({
                    width: size - margin + 'px',
                    height: size - margin + el.parentElement.querySelector('.item__title').scrollHeight + 'px',
                });
            });
        })
        .trigger('resize');

    $$('.photo img').on('load', () => window.trigger('resize'));
    $$('.photo').on('click', function () {
        location.href = this.dataset.href;
    });
});
