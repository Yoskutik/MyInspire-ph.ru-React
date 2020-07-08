import React from 'react';
import $ from 'jquery';
import listItems from './listItems.json';

export default class ItemsList extends React.Component {
    ListItem = props => {
        let description = [];
        if (props.isExtra) {
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
                    <img alt="Подробнее" className="list__item_cross" src="/assets/icons/x.png"/>
                </div>
                <p className="list__item_info" itemProp="description">{description}</p>
            </div>
        );
    };

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
