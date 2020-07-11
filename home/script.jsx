import React from 'react';
import ReactDom from 'react-dom';
import Body from "@elements/body";
import Home from "./elements/home";
import $ from 'jquery';

$(window).ready(() => {
    ReactDom.render(
        <Body>
            <Home/>
        </Body>,
        $('#body')[0]
    );

    let images = $('.collage__img');

    let loadedImages = 0;
    let onImageLoaded = function() {
        this.removeEventListener('load', onImageLoaded);
        if (++loadedImages === 2) {
            $(window).trigger('images-loaded');
        }
    };
    images.on('load', onImageLoaded);

    if (window.innerWidth > window.innerHeight) {
        images[0].src = '/home/photos/horizontal/2.png';
        images[1].src = '/home/photos/horizontal/4.png';
        $('.collage').addClass('horizontal');
    } else {
        images[0].src = '/home/photos/vertical/1.png';
        images[1].src = '/home/photos/vertical/2.png';
        $('.collage').addClass('vertical');
    }
});

$(window).on('images-loaded', () => {
    let currentImage = 0;
    let images = $('.collage__img');

    let startSwitchingImages = () => {
        return setInterval(() => images.eq(++currentImage % 2).css({opacity: 0}), 6000);
    };

    images.on('transitionend', function () {
        let el = $(this);
        if (el.css('opacity') === '0') {
            $('.collage').prepend(el);
            el.css({
                'transition-duration': '0s',
                'opacity': '1',
            });
            setTimeout(() => el.css('transition-duration', '3.5s'));
        }
    });
    images.css({'opacity': 1});

    let imagesSwitcherId = startSwitchingImages();
    $(window)
        .on('blur', () => clearInterval(imagesSwitcherId))
        .on('focus', () => imagesSwitcherId = startSwitchingImages());
});
