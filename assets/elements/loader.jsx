import PropTypes from 'prop-types';
import React from 'react';
import '@styles/loader.scss';

/**
 * A main loader element. Must be hidden and removed with
 * Loader.hideLoader() after the all sources were loaded.
 * @param {boolean} props.isMain: default true - main loader
 * will be removed after the window is loaded.
 * @param {boolean} props.isDark: default false - should the
 * dark theme be used.
 */
class Loader extends React.Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }

  componentDidMount() {
    if (this.props.isMain) {
      window.addEventListener('load', () => {
        console.timeEnd('Loaded');
        this.ref.current.style.opacity = '0';
      });
    } else {
      setTimeout(() => {
        this.ref.current.style.opacity = '0';
      });
    }
  }

  onTransitionEnd = () => {
    this.ref.current.remove();
  };

  render() {
    return (
      <div className={`loader ${this.props.isDark ? 'dark-loader' : ''}`}
           onTransitionEnd={this.onTransitionEnd}
           ref={this.ref}>
        <div className="loader__spinner" role="status" />
      </div>
    );
  }
}

Loader.propTypes = {
  isMain: PropTypes.bool,
  isDark: PropTypes.bool,
};

Loader.defaultProps = {
  isMain: true,
  isDark: false,
};

export default Loader;
