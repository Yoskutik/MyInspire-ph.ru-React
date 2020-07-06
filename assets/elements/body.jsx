import React from 'react';
import Loader from "./loader";
import Header from "./header";
import Footer from "./footer";

/**
 *  Main component for all pages. Contains Loader, Header and Footer.
 *  All elements inside Body will be placed between Header and Footer.
 *  @component
 *  @example
 *  <Body>
 *      <div class="div"></div>
 *  </Body>
 */
export default class Body extends React.Component {
    render() {
        return (
            <>
                <Loader/>
                <Header/>
                {this.props.children}
                <Footer/>
            </>
        )
    }
}
