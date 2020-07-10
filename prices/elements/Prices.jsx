import React from 'react';
import ItemsList from "./ItemsList";
import conditions from './conditions.json';

/**
 * Main component of prices page. Consists of list of services and
 * additional information, that stored in conditions.json.
 * @component
 */
export default class Prices extends React.Component {
    /**
     * A component for additional information block.
     * @param {Object} props
     * @param {String} props.title - A title of the block.
     * @param {Array<String>} props.paragraphs - An array of paragraphs
     * in the block.
     */
    Conditions = props => (
        <div className="conditions container">
            <h3 className="conditions__title">{props.title}</h3>
            {props.paragraphs.map((p, i) => <p className="conditions__text" key={i}>{p}</p>)}
        </div>
    );

    render() {
        return (
            <div className="body">
                <h1 className="super-hidden">Цены и услуги</h1>
                <ItemsList/>
                {conditions.map((cond, i) => {
                    return <this.Conditions {...cond} key={i}/>
                })}
            </div>
        )
    }
}
