import React from 'react';
import $ from 'jquery';

/**
 * A component for a toast. To use toasts you should add
 * a specific container for them.
 * @param {Object} props
 * @param {String} props.title - The title of the toast.
 * @param {String} props.text - The main body of the toast.
 * @component
 */
export default class Toast extends React.Component {
    constructor(props) {
        super(props);
        this.ref = React.createRef();
        this.onCloseClick = this.onCloseClick.bind(this);
    }

    /**
     * When toast is closed, it starts the animation of going
     * down and fading out. After that it is been removed.
     * @callback
     */
    onCloseClick = () => {
        let toast = $(this.ref.current);
        toast
            .css({
                opacity: '0',
                transform: 'translate(0, 100px)',
            })
            .on('transitionend', () => toast.remove());
    };

    /**
     * The toast must be visible for 3 seconds. After that
     * it should be closed.
     */
    componentDidMount() {
        setTimeout(() => {
            let toast = $(this.ref.current);
            toast.css({
                opacity: '1',
                transform: 'translate(0, 0)',
            });

            setTimeout(() => this.onCloseClick(), 3000);
        })
    }

    render() {
        return (
            <div className="toast" ref={this.ref}>
                <div className="toast__header">
                    <strong className="toast__title">{this.props.title}</strong>
                    <button className="close" onClick={this.onCloseClick}>&times;</button>
                </div>
                <div className="toast__body">{this.props.text}</div>
            </div>
        );
    }
}
