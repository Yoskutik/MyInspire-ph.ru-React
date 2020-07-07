import React from 'react';

/**
 * A main loader element. Must be hidden and removed with
 * Loader.hideLoader() after the all sources were loaded.
 * @component
 */
export default class Loader extends React.Component {
    /**
     * Hides loader by fading out.
     */
    static hideLoader = () => {
        setTimeout(() => {
            let loader = document.querySelector('.loader');
            loader.style.opacity = '0';
        });
    };

    /**
     * A transition end handler. Needed for Loader.hideLoader().
     * Removes the loader after fading out.
     * @callback
     */
    onTransitionEnd = () => {
        document.querySelector('.loader').remove();
    };

    render() {
        return (
            <div className="loader" onTransitionEnd={this.onTransitionEnd}>
                <div className="loader__spinner" role="status"/>
            </div>
        )
    }
}
