import PropTypes from 'prop-types';
import React from 'react';

/**
 * A feedback form. Uses backend API from '/api/sendMail.php'.
 * Uses toast function from parent component.
 * @component
 */
export default class Feedback extends React.Component {
    constructor() {
        super();
        this.lastSendAt = 0;
    }

    /**
     * Checks validity of all inputs and then submits the email.
     * Also implements a check for frequent sending of messages.
     * @param {Event} evt
     * @callback
     */
    onSubmit = evt => {
        evt.preventDefault();

        let valid = true;
        document.querySelectorAll('.contacts__message_input').forEach(el => {
            if (el.validity.valueMissing) {
                document.querySelector('.contacts__error-message.required').style.display = 'block';
                el.classList.add('danger');
                valid = false;
            }
            if (el.validity.typeMismatch) {
                document.querySelector('.contacts__error-message.mail').style.display = 'block';
                el.classList.add('danger');
                valid = false;
            }
        });
        if (!valid) return;

        if (Date.now() - this.lastSendAt < 15000) {
            this.props.toast('Электронная почта', 'Подождите некоторое время перед повторной отправкой сообщения');
            return;
        }

        fetch('/api/sendMail.php', {
            method: 'POST',
            body: new FormData(document.querySelector('.contacts__message')),
        })
            .then(response => {
                if (response.ok) {
                    this.props.toast('Электронная почта', 'Сообщение успешно доставленно');
                    this.lastSendAt = Date.now();
                } else {
                    this.props.toast('Электронная почта', 'При отправке сообщения возникли ошибки');
                }
            })
            .catch(() => this.props.toast('Электронная почта', 'При отправке сообщения возникли ошибки'));
    };

    render() {
        return (
            <div className="contacts__column">
                <h3 className="contacts__column_title">Прямая связь</h3>
                <form className="contacts__message" autoComplete="off">
                    <div className="contacts__message_field">
                        <label className="contacts__message_label" htmlFor="name">
                            <input className="contacts__message_input"
                                   type="text"
                                   placeholder="Ваше имя:"
                                   required
                                   id="name"
                                   name="name" />
                        </label>
                    </div>
                    <div className="contacts__message_field">
                        <label className="contacts__message_label" htmlFor="email">
                            <input className="contacts__message_input"
                                   type="email"
                                   placeholder="E-mail:"
                                   required
                                   id="email"
                                   name="email" />
                        </label>
                    </div>
                    <div className="contacts__message_field">
                        <label className="contacts__message_label" htmlFor="subject">
                            <input className="contacts__message_input"
                                   type="text"
                                   placeholder="Тема:"
                                   required
                                   id="subject"
                                   name="subject" />
                        </label>
                    </div>
                    <div className="contacts__message_field">
                        <label className="contacts__message_label" htmlFor="message">
                            <textarea className="contacts__message_input"
                                      rows="6"
                                      placeholder="Сообщение:"
                                      required
                                      id="message"
                                      name="message" />
                        </label>
                    </div>
                    <input type="submit"
                           value="Отправить"
                           className="contacts__message_submit"
                           onClick={this.onSubmit} />
                </form>
                <p className="contacts__error-message required">* Заполните, пожалуйста, все поля</p>
                <p className="contacts__error-message mail">* Поле почты заполненно неверно</p>
            </div>
        );
    }
}

Feedback.propTypes = {
    toast: PropTypes.func.isRequired,
};
