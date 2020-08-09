import PropTypes from 'prop-types';
import React from 'react';
import Footer from './footer';
import Header from './header';
import Loader from './loader';
import '@styles/Base.scss';

/**
 *  Main component for all pages. Contains Loader, Header and Footer.
 *  All elements inside Body will be placed between Header and Footer.
 *  @component
 *  @example
 *  <Body>
 *      <div class="div"></div>
 *  </Body>
 */
class Body extends React.Component {
  componentDidMount() {
    // eslint-disable-next-line no-console
    console.log(`
    # ======================================================= #
    || Hello, wanderer!                                      ||
    || I don't know why are you here. But if you think this  ||
    || site can be improved somehow, you can write to me     ||
    || (developer) - yoskutik@gmail.com.                     ||
    # ======================================================= #
    `);
  }

  render() {
    return (
      <>
        <Loader />
        <Header />
        {this.props.children}
        <Footer />
      </>
    );
  }
}

Body.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
};

export default Body;
