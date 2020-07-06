'use strict';

window.off('load', onWindowLoaded);

document.on('DOMContentLoaded', () => {
    let images = $$('.collage__img');

    let loadedImages = 0;
    let onImageLoaded = function() {
        this.off('load', onImageLoaded);
        if (++loadedImages === 2) {
            window.trigger('images-loaded');
        }
    };
    images.on('load', onImageLoaded);

    if (window.innerWidth > window.innerHeight) {
        images[0].src = '/home/photos/horizontal/2.png';
        images[1].src = '/home/photos/horizontal/4.png';
        $('.collage').classList.add('horizontal');
    } else {
        images[0].src = '/home/photos/vertical/1.png';
        images[1].src = '/home/photos/vertical/2.png';
        $('.collage').classList.add('vertical');
    }
});

window.on('images-loaded', () => {
    onWindowLoaded();

    let currentImage = 0;
    let images = $$('.collage__img');

    let startSwitchingImages = () => {
        return setInterval(() => images[++currentImage % 2].css({opacity: 0}), 6000);
    };

    images.on('transitionend', function () {
        let style = this.style;
        if (style.opacity === '0') {
            $('.collage').insertAdjacentElement('afterbegin', this);
            style.transitionDuration = '0s';
            style.opacity = '1';
            setTimeout(() => style.transitionDuration = '3.5s');
        }
    });
    images.css({'opacity': 1});

    let imagesSwitcherId = startSwitchingImages();
    window
        .on('blur', () => clearInterval(imagesSwitcherId))
        .on('focus', () => imagesSwitcherId = startSwitchingImages());
});
