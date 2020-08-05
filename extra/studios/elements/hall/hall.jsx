import PropTypes from 'prop-types';
import React from 'react';
import studios from '../studios.json';
import Info from './info';
import Preview from './preview';

/**
 * A hall - an item from the list. Each hall contains images - main and/or
 * extra images, and additional information.
 * @component
 */
export default class Hall extends React.Component {
  /**
   * Each time small image clicked it should be switched in the active
   * mode, while other active photo is switched to a passive mode.
   * "Active" means that big image shows the image from small active one.
   * @param {Event} evt
   * @callback
   */
  onSmallImageClick = evt => {
    const el = evt.target;
    const item = el.closest('.list__item');
    if (el.classList.contains('list__item_small-image')) {
      item.querySelector('.active').classList.remove('active');
      el.classList.add('active');
      item.querySelector('.list__item_main-image').src = el.src;
    }
  };

  render() {
    const studio = studios[this.props.studio];
    if (!studio) {
      console.warn(`The studio of ${this.props.title} hasn't been found.`);
    }
    const address = this.props.address || studio.address;
    const contacts = this.props.contacts || studio.contacts;
    return (
      <div className="list__item" onClick={this.onSmallImageClick}>
        <h2 className="list__item_title">
          <a href={studio.href} target="_blank" rel="noreferrer">{this.props.studio}</a>
        </h2>
        <div className="list__item_extra">
          <Preview photos={this.props.photos} />
          <Info title={this.props.title}
                prices={this.props.prices}
                address={address}
                contacts={contacts}
                description={this.props.description}
                href={this.props.href} />
        </div>
      </div>
    );
  }
}

Hall.propTypes = {
  studio: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  address: PropTypes.object,
  contacts: PropTypes.object,
  photos: PropTypes.array.isRequired,
  prices: PropTypes.array.isRequired,
  description: PropTypes.string.isRequired,
};

Hall.defaultProps = {
  address: null,
  contacts: null,
};
