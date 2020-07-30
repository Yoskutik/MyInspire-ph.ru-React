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
const Body = function (props) {
    return (
        <>
            <Loader />
            <Header />
            {props.children}
            <Footer />
        </>
    );
};

Body.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.arrayOf(PropTypes.element),
    ]).isRequired,
};

export default Body;
