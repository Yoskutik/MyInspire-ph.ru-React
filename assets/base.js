'use strict';

const $ = selector => document.querySelector(selector);
const $$ = selector => document.querySelectorAll(selector);
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

EventTarget.prototype.on = function (...args) {
    this.addEventListener(...args);
    return this;
};
EventTarget.prototype.off = function (...args) {
    this.removeEventListener(...args);
    return this;
};
EventTarget.prototype.trigger = function (evt) {
    this.dispatchEvent(new Event(evt));
    return this;
};

Node.prototype.hide = function () {
    this.style.display = 'none';
    return this;
};
Node.prototype.css = function (styles) {
    for (let [key, value] of Object.entries(styles)) {
        this.style[key] = value;
    }
    return this;
};

NodeList.prototype.on = function (...args) {
    this.forEach(el => el.addEventListener(...args));
    return this;
};
NodeList.prototype.off = function (...args) {
    this.forEach(el => el.removeEventListener(...args));
    return this;
};
NodeList.prototype.trigger = function (evt) {
    evt = new Event(evt);
    this.forEach(el => el.dispatchEvent(evt));
    return this;
};
NodeList.prototype.hide = function () {
    this.forEach(el => el.style.display = 'none');
    return this;
};
NodeList.prototype.css = function (styles) {
    this.forEach(el => {
        for (let [key, value] of Object.entries(styles)) {
            el.style[key] = value;
        }
    });
    return this;
};
NodeList.prototype.remove = function () {
    this.forEach(el => el.remove());
    return this;
};


document.on('DOMContentLoaded', () => {
    let nav = $('.header__nav');

    let onMenuPopup = evt => {
        if (!evt.target.closest('.header__nav')) {
            nav.hide();
            document.off('click', onMenuPopup);
        }
    };

    $('.header__dropdown-btn').on('click', () => {
        if (nav.classList.contains('visible')) {
            nav.classList.remove('visible');
            document.off('click', onMenuPopup);
        } else {
            nav.classList.add('visible');
            setTimeout(() => document.on('click', onMenuPopup));
        }
    });

    $('.footer').on('click', function (evt) {
        let element = evt.target.closest('.footer__block_title');
        if (element) {
            element.parentElement.classList.toggle('opened');
        }
    });
});

let onWindowLoaded = () => {
    try {
        console.timeEnd('Loaded');

        $('.loader')
            .css({opacity: 0})
            .on('transitionend', function () {
                this.remove();
            });
    } catch (e) { }
};

window.on('load', onWindowLoaded);
