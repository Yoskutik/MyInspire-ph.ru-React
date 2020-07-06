'use strict';

document.on('DOMContentLoaded', () => {
    let toast = (title, body) => {
        let template = $('#toast').content.cloneNode(true);
        template.querySelector('.toast__title').textContent = title;
        template.querySelector('.toast__body').textContent = body;
        $('body').appendChild(template);

        setTimeout(() => {
            let toasts = $$('.toast');
            let toast = toasts[toasts.length - 1];
            toast.css({
                opacity: '1',
                transform: 'translate(0, 0)',
            });
            toast.querySelector('.close').on('click', () => {
                toast
                    .css({
                        opacity: '0',
                        transform: 'translate(0, 100px)',
                    })
                    .on('transitionend', () => toast.remove());
            });
            sleep(3000).then(() => toast.querySelector('.close').click());
        });
    };

    let copyToClipboard = function (str) {
        const el = document.createElement('textarea');
        el.value = str;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
    };

    $('.contacts__message').on('focus', evt => {
        if (evt.target.classList.contains('contacts__message_input')) {
            evt.target.classList.remove('danger');

            $$('.contacts__error-message').forEach(el => el.hide());
        }
    }, true);

    let lastSendAt = 0;
    $('.contacts__message_submit').on('click', evt => {
        evt.preventDefault();

        let valid = true;
        for (let input of $$('.contacts__message_input')) {
            if (input.validity.valueMissing) {
                $('.contacts__error-message.required').css({
                    display: 'block',
                });
                input.classList.add('danger');
                valid = false;
            }
            if (input.validity.typeMismatch) {
                $('.contacts__error-message.mail').css({
                    display: 'block',
                });
                input.classList.add('danger');
                valid = false;
            }
        }
        if (!valid) return;

        if (Date.now() - lastSendAt < 15000) {
            toast('Электронная почта', 'Подождите некоторое время перед повторной отправкой сообщения');
            return;
        }

        // TODO проверить работу почты
        let request = new XMLHttpRequest();
        request.open('post', '/api/sendMail.php');
        request.send({
            name: $('[name=name]').value,
            email: $('[name=email]').value,
            subject: $('[name=subject]').value,
            body: $('[name=body]').value,
        });
        request.onload = () => {
            if (request.status === 200) {
                toast('Электронная почта', 'Сообщение успешно доставленно');
                lastSendAt = Date.now();
            }
        };
        request.onerror = () => {
            toast('Электронная почта', 'При отправке сообщения возникли ошибки');
        };
    });

    $('.copy__mail').on('click', () => {
        copyToClipboard('tatiana.mix.1910@gmail.com');
        toast('Электронная почта', 'Адрес электронной почты был скопирован');
    });
    $('.copy_tel').on('click', () => {
        copyToClipboard('+7(999)515-42-17');
        toast('Телефон', 'Номер телефона был скопирован');
    });
});
