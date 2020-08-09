import PropTypes from 'prop-types';
import React from 'react';
import '@styles/alert.scss';

/**
 * Bootstrap-like alert component.
 * @component
 * @example
 * <Alert type={Alert.Types.SUCCESS} expiredAt={Alert.createExpiredAt(1, 12, 2021)}>
 *     Content of alert.
 * </Alert>
 */
class Alert extends React.Component {
  static Types = {
    SUCCESS: 'success',
    INFO: 'info',
    ERROR: 'error',
  };

  /**
   * Create new Date object of format "23:59:59 day.month.year"
   * @param {Number} day
   * @param {Number} month
   * @param {Number} year
   * @returns {Date}
   */
  static createExpiredAt = function (day, month, year) {
    const date = new Date();

    date.setDate(day);
    date.setMonth(month - 1);
    date.setFullYear(year);

    date.setHours(23);
    date.setMinutes(59);
    date.setSeconds(59);
    return date;
  };

  constructor() {
    super();
    this.ref = React.createRef();
  }

  onClose = () => {
    this.ref.current.remove();
    if (this.props.onClose) this.props.onClose();
  };

  render() {
    if (this.props.expiredAt && new Date() >= this.props.expiredAt) return null;
    return (
      <div className={`alert alert-${this.props.type} container ${this.props.className}`} ref={this.ref}>
        {this.props.children}
        <button type="button" className="alert__close" onClick={this.onClose}>×</button>
      </div>
    );
  }
}

Alert.propTypes = {
  expiredAt: PropTypes.instanceOf(Date),
  children: PropTypes.string.isRequired,
  type: PropTypes.oneOf(Object.values(Alert.Types)),
  className: PropTypes.string,
  onClose: PropTypes.func,
};

Alert.defaultProps = {
  type: Alert.Types.INFO,
  className: '',
  expiredAt: null,
  onClose: null,
};

export default Alert;
