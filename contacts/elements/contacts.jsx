import React from 'react';
import Toast from '@elements/toast';
import ContactsCard from './contactsCard';
import Feedback from './feedback';

/**
 * The main component of the contacts page. Contains short intro, an
 * information about contacts and a feedback form. This page assumes
 * the presence of the toasts.
 * @component
 */
export default class Contacts extends React.Component {
  constructor(props) {
    super(props);
    this.toastsList = [];
    this.state = {
      toastsList: this.toastsList,
    };
  }

    /**
     * An intro of the page.
     * @constructor
     */
    Intro = () => (
      <div className="intro container">
        <div className="intro__container">
          <h2 className="intro__title">Запись на съёмку</h2>
          <div className="intro__text">
            <p>
              Если вы ознакомились со всеми ценами, прочли условия и осознали,
              что я - именно тот, кого Вы так давно искали, то скорее пишите мне
              в удобной Вам социальной сети и мы с Вами обсудим все детали.
            </p>
            <p>
              У меня не всегда бывает возможность моментально отвечать. Обычно
              ответ занимает не больше суток. Прошу отнестись к этому с пониманием.
            </p>
          </div>
        </div>
      </div>
    );

    /**
     * A function to make a toast. Must be passed to child components.
     * @param title - the title of the toast
     * @param text - the main body of the toast
     */
    toast = (title, text) => {
      const tmp = this.toastsList.slice();
      tmp.push(<Toast title={title} text={text} key={Math.random()} />);
      this.toastsList = tmp;
      this.setState({ toastsList: this.toastsList });
    };

    render() {
      return (
        <div className="body">
          <this.Intro />
          <div className="contacts container">
            <div className="contacts__container">
              <ContactsCard toast={this.toast} />
              <Feedback toast={this.toast} />
            </div>
          </div>
          {this.state.toastsList}
        </div>
      );
    }
}
