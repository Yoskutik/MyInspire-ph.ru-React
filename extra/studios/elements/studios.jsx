import React from 'react';
import Filters from './filters/filters';
import Hall from './hall/hall';
import halls from './halls.json';

/**
 * The main component for the extra/studios page.
 * @component
 */
export default class Studios extends React.Component {
  constructor() {
    super();
    this.state = {
      furniture: null,
      darkness: null,
      sort: false,
      by: 'ASC',
    };
    this.hallsList = halls.map(hall => <Hall key={Math.random()} {...hall} />);
  }

  /**
   * By setting new state, the sorting is applying.
   * @param {Object} filters - see <Studios.Sort> props.
   */
  updateFilters = filters => {
    const { state } = this;
    this.setState(
      { ...state, ...filters },
    );
  };

  /**
   * Implements sorting.
   * @param props
   * @param {Object} props
   * @param {boolean|Object} props.furniture - can be null, true or false. Filters
   * elements based on the actual content of furniture.
   * @param {boolean|Object} props.darkness - can be null, true or false. Filters
   * elements based on the actual brightness of the hall.
   * @param {boolean} props.sort - flag indicating whether to sort.
   * @param {String} props.by - a type of sorting. Can be "ASC" or "DESC".
   * @component
   */
  Sort = props => {
    let hallsList = this.hallsList.slice();
    if (props.furniture !== null) {
      hallsList = hallsList.filter(hall => hall.props.furniture === props.furniture);
    }
    if (props.darkness !== null) {
      hallsList = hallsList.filter(hall => hall.props.darkness === props.darkness);
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
        <Filters updateFilters={this.updateFilters} />
        <div className="list">
          <this.Sort {...this.state}>
            {this.state.hallsList}
          </this.Sort>
        </div>
      </div>
    );
  }
}
