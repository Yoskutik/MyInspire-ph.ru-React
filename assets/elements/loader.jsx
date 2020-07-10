import React from 'react';

/**
 * A main loader element. Must be hidden and removed with
 * Loader.hideLoader() after the all sources were loaded.
 * @component
 * @param {Object} props
 * @param {boolean} props.isMain: default true - main loader
 * will be removed after the window is loaded.
 * @param {boolean} props.isDark: default false - should the
 * dark theme be used.
 */
export default class Loader extends React.Component {
    constructor(props) {
        super(props);
        this.ref = React.createRef();
        this.isMain = props.isMain === undefined ?  true : this.isMain;
    }

    /**
     * A transition end handler. Needed for Loader.hideLoader().
     * Removes the loader after fading out.
     * @callback
     */
    onTransitionEnd = () => {
        document.querySelector('.loader').remove();
    };

    /**
     * Creates a callback, that removes loader after window is loaded.
     */
    componentDidMount() {
        if (!this.isMain) return;
        window.addEventListener('load', () => {
            console.timeEnd('Loaded');
            this.ref.current.style.opacity = '0';
        });
    }

    render() {
        return (
            <div className={`loader ${this.props.isDark ? 'dark-loader' : ''}`} onTransitionEnd={this.onTransitionEnd} ref={this.ref}>
                <div className="loader__spinner" role="status"/>
            </div>
        )
    }
}
