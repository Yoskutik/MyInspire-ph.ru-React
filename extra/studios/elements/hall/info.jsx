import PropTypes from 'prop-types';
import React from 'react';

/**
 * An information component. Contains information about price, hall's title and its
 * studio title as links to their website, description, and address (the title and
 * the link from Google Maps).
 * @param {Object} props
 * @param {String} props.title - the title of the hall.
 * @param {String} props.href - a link of the hall's website.
 * @param {Array<String>} props.prices - a list of prices of the hall. The price
 * can vary from day to day. E.g. one price on weekdays, other on weekends.
 * @param {{location: String, href: String}} props.address - the title of the
 * location and the link from Google Maps.
 * @param {Array<String>} props.description - a list of paragraphs for description.
 * @param {{phone: String}} props.contacts - information about contacts. For now
 * it only phone information.
 * @component
 */
const Info = props => {
  const priceFormatter = new Intl.NumberFormat('ru-RU');
  return (
    <div className="list__item_info">
      <h3 className="list__item_hall">
        <a href={props.href} target="_blank" rel="noreferrer">{props.title}</a>
      </h3>
      <span className="list__item_price">
        {props.prices.map(price => (
          <React.Fragment key={Math.random()}>
            {priceFormatter.format(+price)}
          </React.Fragment>
        ))
          .reduce((prev, curr) => [prev, ' / ', curr])}
      </span>
      {/* eslint-disable-next-line react/no-danger */}
      <p className="list__item_description" dangerouslySetInnerHTML={{ __html: props.description }} />
      <div className="list__item_contacts\">
        <strong>Контакты:</strong>
        <p>
          <a href={`https://www.google.com/maps/${props.address.href}`} target="_blank" rel="noreferrer">
            {props.address.location}
          </a>
          <br />
          {(props.contacts && props.contacts.phone)
            ? (
              <>
                Телефон:
                {' '}
                <a href={`tel:${props.contacts.phone}`}>{props.contacts.phone}</a>
              </>
            )
            : null}
        </p>
      </div>
    </div>
  );
};

Info.propTypes = {
  title: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  prices: PropTypes.arrayOf(String).isRequired,
  description: PropTypes.string.isRequired,
  address: PropTypes.object.isRequired,
  contacts: PropTypes.object,
};

Info.defaultProps = {
  contacts: null,
};

export default Info;
