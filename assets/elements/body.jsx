import React from 'react';
import Loader from "./loader";
import Header from "./header";
import Footer from "./footer";

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
