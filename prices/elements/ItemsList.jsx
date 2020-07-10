import React from 'react';
import $ from 'jquery';
import listItems from './listItems.json';

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
     * @param {boolean} props.isExtra - "extra" item means that this
     * service is not a type of photo session.
     * @param {String} props.additional - an additional information, that
     * will be written in the <small> tag.
     */
    ListItem = props => {
        let description = [];
        if (!props.isExtra) {
            description.push(
                <span key={Math.random()}>В стоимость входит: <br key={Math.random()}/><br key={Math.random()}/></span>
            );
        }
        for (let i = 0, j = 0; i < props.description.length; i++) {
            description.push(<span key={Math.random()}>{props.description[i]}</span>);
            description.push(<br key={i}/>);
        }
        if (props.additional) {
            description.push(
                <small key={Math.random()}>* {props.additional}</small>
            )
        } else {
            description.pop();
        }
        return (
            <div className="list__item" itemProp="itemListElement" itemScope itemType="http://schema.org/Product">
                <div className="list__item_header">
                    <h2 className="list__item_title" itemProp="name">{props.title}</h2>
                    <strong className={"list__item_price" + (props.price ? '': ' empty')} itemProp="offers" itemScope
                            itemType="http://schema.org/Offer">
                        <span itemProp="price">{props.price}</span>
                    </strong>
                    <span className="list__item_cross">&times;</span>
                </div>
                <p className="list__item_info" itemProp="description">{description}</p>
            </div>
        );
    };

    /**
     * Each item in the list must have a dropdown description.
     * @param {Event} evt
     * @callback
     */
    onListClick = evt => {
        let item = $(evt.target).closest('.list__item');

        if (item) {
            if (item.hasClass('opened')) {
                item.css({'max-height': '2rem'});
            } else {
                item.css({'max-height': item[0].scrollHeight + 'px'});
            }
            item.toggleClass('opened');
        }
    };

    render() {
        return (
            <div className="list container" itemScope itemType="http://schema.org/ItemList" onClick={this.onListClick}>
                {listItems.map((item, i) =>
                    <this.ListItem key={i} {...item}/>
                )}
            </div>
        )
    }
}
