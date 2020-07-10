import React from 'react';
import $ from "jquery";

/**
 * A feedback form. Uses backend API from '/api/sendMail.php'.
 * Uses toast function from parent component.
 * @component
 */
export default class Feedback extends React.Component {
    constructor() {
        super();
        this.onSubmit = this.onSubmit.bind(this);
        this.lastSendAt = 0;
        this.refName = React.createRef();
        this.refEmail = React.createRef();
        this.refSubject = React.createRef();
        this.refBody = React.createRef();
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
        $('.contacts__message_input').each((i, el) => {
            if (el.validity.valueMissing) {
                $('.contacts__error-message.required').css({
                    display: 'block',
                });
                el.classList.add('danger');
                valid = false;
            }
            if (el.validity.typeMismatch) {
                $('.contacts__error-message.mail').css({
                    display: 'block',
                });
                el.classList.add('danger');
                valid = false;
            }
        });
        if (!valid) return;

        if (Date.now() - this.lastSendAt < 15000) {
            this.props.toast('Электронная почта', 'Подождите некоторое время перед повторной отправкой сообщения');
            return;
        }

        $.ajax({
            url: '/api/sendMail.php',
            type: 'post',
            data: {
                name: this.refName.current.value,
                email: this.refEmail.current.value,
                subject: this.refSubject.current.value,
                body: this.refBody.current.value,
            },
            success: data => {
                this.props.toast('Электронная почта', 'Сообщение успешно доставленно');
                this.lastSendAt = Date.now();
            },
            error: () => {
                this.props.toast('Электронная почта', 'При отправке сообщения возникли ошибки');
            }
        })
    };

    render() {
        return (
            <div className="contacts__column">
                <h3 className="contacts__column_title">Прямая связь</h3>
                <form className="contacts__message" autoComplete="off" role="form">
                    <div className="contacts__message_field">
                        <label className="contacts__message_label">
                            <input className="contacts__message_input" type="text" placeholder="Ваше имя:" required
                                   ref={this.refName}/>
                        </label>
                    </div>
                    <div className="contacts__message_field">
                        <label className="contacts__message_label">
                            <input className="contacts__message_input" type="email" placeholder="E-mail:" required
                                   ref={this.refEmail}/>
                        </label>
                    </div>
                    <div className="contacts__message_field">
                        <label className="contacts__message_label">
                            <input className="contacts__message_input" type="text" placeholder="Тема:" required
                                   ref={this.refSubject}/>
                        </label>
                    </div>
                    <div className="contacts__message_field">
                        <label className="contacts__message_label">
                            <textarea className="contacts__message_input" rows="6" placeholder="Сообщение:" required
                                      ref={this.refBody}/>
                        </label>
                    </div>
                    <input type="submit" value="Отправить" className="contacts__message_submit" onClick={this.onSubmit}/>
                </form>
                <p className="contacts__error-message required">* Заполните, пожалуйста, все поля</p>
                <p className="contacts__error-message mail">* Поле почты заполненно неверно</p>
            </div>
        );
    }
}
