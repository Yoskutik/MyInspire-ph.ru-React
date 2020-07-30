import PropTypes from 'prop-types';
import React from 'react';
import '@styles/alert.scss';

class Alert extends React.Component {
    static Types = {
        SUCCESS: 'success',
        INFO: 'info',
        ERROR: 'error',
    };

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

    render() {
        if (new Date() >= this.props.expiredAt) return null;
        return (
            <div className={`alert alert-${this.props.type} container`} ref={this.ref}>
                {this.props.children}
                <button type="button" className="alert__close" onClick={() => this.ref.current.remove()}>×</button>
            </div>
        );
    }
}

Alert.propTypes = {
    expiredAt: PropTypes.instanceOf(Date).isRequired,
    children: PropTypes.string.isRequired,
    type: PropTypes.oneOf(Object.values(Alert.Types)),
};

Alert.defaultProps = {
    type: Alert.Types.INFO,
};

export default Alert;
