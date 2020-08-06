import React from 'react';
import Toast from '@elements/toast';
import Card from './card';
import Feedback from './feedback';
import Intro from './intro';

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
        <h1 className="super-hidden">
          Контакты
        </h1>
        <Intro />
        <div className="contacts container">
          <div className="contacts__container">
            <Card toast={this.toast} />
            <Feedback toast={this.toast} />
          </div>
        </div>
        {this.state.toastsList}
      </div>
    );
  }
}
