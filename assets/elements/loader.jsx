import React from 'react';

export default class Loader extends React.Component {
    render() {
        return (
            <div className="loader">
                <div className="loader__spinner" role="status"/>
            </div>
        )
    }
}
