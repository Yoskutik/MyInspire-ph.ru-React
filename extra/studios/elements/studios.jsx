import React from 'react';
import halls from './halls.json';
import Filters from "./filters";
import Hall from "./hall";

export default class Studios extends React.Component {
    constructor() {
        super();
        this.state = {
            furniture: null,
            darkness: null,
            sort: false,
            by: 'ASC',
        };
        this.hallsList = halls.map((hall, i) =>
            <Hall key={i} {...hall}/>
        );
    }

    updateFilters = filters => {
        this.setState(
            Object.assign({}, this.state, filters),
        )
    };

    Sort = props => {
        let hallsList = this.hallsList.slice();
        if (props.furniture !== null) {
            hallsList = hallsList.filter(hall => hall.props.furniture === props.furniture)
        }
        if (props.darkness !== null) {
            hallsList = hallsList.filter(hall => hall.props.darkness === props.darkness)
        }
        if (props.sort) {
            if (props.by === 'ASC') {
                hallsList = hallsList.sort((a, b) => a.props.prices[0] - b.props.prices[0]);
            } else if (props.by === 'DESC') {
                hallsList = hallsList.sort((a, b) => b.props.prices[0] - a.props.prices[0]);
            }
        }
        return hallsList;
    };

    render() {
        return (
            <div className="body container">
                <Filters updateFilters={this.updateFilters}/>
                <div className="list">
                    <this.Sort {...this.state}>
                        {this.state.hallsList}
                    </this.Sort>
                </div>
            </div>
        );
    }
}
