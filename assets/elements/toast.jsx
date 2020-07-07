import React from 'react';
import $ from 'jquery';

export default class Toast extends React.Component {
    constructor(props) {
        super(props);
        this.ref = React.createRef();
        this.onCloseClick = this.onCloseClick.bind(this);
    }

    onCloseClick = () => {
        let toast = $(this.ref.current);
        toast
            .css({
                opacity: '0',
                transform: 'translate(0, 100px)',
            })
            .on('transitionend', () => toast.remove());
    };

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
