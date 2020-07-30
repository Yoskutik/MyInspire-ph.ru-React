import React from 'react';
import listItems from './pricelist.json';

/**
 * A list of services. Contains several items.
 * @component
 */
export default class ItemsList extends React.Component {
    /**
     * Represents an item in the services' list. Each item has its name,
     * description (or additional information), and a price.
     * @param {Object} props
     * @param {String} props.title - a name of service.
     * @param {Number} props.price - a price.
     * @param {Array<String>} props.description - a list of descriptive
     * phrases of the service.
     * @param {String} props.additional - an additional information, that
     * will be written in the <small> tag.
     */
    ListItem = props => {
        const description = props.description.map(el => (
            <React.Fragment key={Math.random()}>
                <span>{el}</span>
                <br />
            </React.Fragment>
        ));
        if (props.additional) {
            description.push(
                <small key={Math.random()}>
                    *
                    {' '}
                    {props.additional}
                </small>,
            );
        }
        return (
            <div className="list__item" itemProp="itemListElement" itemScope itemType="http://schema.org/Product">
                <div className="list__item_header">
                    <h2 className="list__item_title" itemProp="name">
                        {props.title}
                    </h2>

                </div>
                <p className="list__item_info" itemProp="description">
                    {description}
                </p>
                <strong className="list__item_price"
                        itemProp="offers"
                        itemScope
                        itemType="http://schema.org/Offer">
                    <span itemProp="price">{props.price}</span>
                </strong>
            </div>
        );
    };

    render() {
        return (
            <div className="list container" itemScope itemType="http://schema.org/ItemList">
                {listItems.map(item => (
                    <this.ListItem key={Math.random()} {...item} />
                ))}
            </div>
        );
    }
}
