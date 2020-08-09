import PropTypes from 'prop-types';
import React from 'react';
import '@styles/toast.scss';

/**
 * A component for a toast. To use toasts you should add
 * a specific container for them.
 * @param {String} props.title - The title of the toast.
 * @param {String} props.text - The main body of the toast.
 * @component
 */
export default class Toast extends React.Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }

  componentDidMount() {
    setTimeout(() => {
      const toast = this.ref.current;
      toast.style.opacity = '1';
      toast.style.transform = 'translate(0, 0)';
      setTimeout(() => this.onCloseClick(), 3000);
    });
  }

  onCloseClick = () => {
    const toast = this.ref.current;
    toast.style.opacity = '0';
    toast.style.transform = 'translate(0, 100px)';
    toast.addEventListener('transitionend', () => toast.remove());
  };

  render() {
    return (
      <div className="toast" ref={this.ref}>
        <div className="toast__header">
          <strong className="toast__title">{this.props.title}</strong>
          <button className="close" onClick={this.onCloseClick} type="button">&times;</button>
        </div>
        <div className="toast__body">{this.props.text}</div>
      </div>
    );
  }
}

Toast.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
