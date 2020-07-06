import React from 'react';

export default class Genres extends React.Component {
    constructor(props) {
        super(props);
        this.genresDescriptions = {
            first: [
                `съешь ещё этих мягких французских булок, да выпей чаю
                съешь ещё этих мягких французских булок, да выпей чаю
                съешь ещё этих мягких французских булок, да выпей чаю
                съешь ещё этих мягких французских булок, да выпей чаю
                съешь ещё этих мягких французских булок, да выпей чаю`,
                `съешь ещё этих мягких французских булок, да выпей чаю
                съешь ещё этих мягких французских булок, да выпей чаю
                съешь ещё этих мягких французских булок, да выпей чаю`,
            ],
            second: [
                `съешь ещё этих мягких французских булок, да выпей чаю
                съешь ещё этих мягких французских булок, да выпей чаю
                съешь ещё этих мягких французских булок, да выпей чаю
                съешь ещё этих мягких французских булок, да выпей чаю
                съешь ещё этих мягких французских булок, да выпей чаю`,
                `съешь ещё этих мягких французских булок, да выпей чаю
                съешь ещё этих мягких французских булок, да выпей чаю
                съешь ещё этих мягких французских булок, да выпей чаю`,
            ],
            third: [
                `съешь ещё этих мягких французских булок, да выпей чаю
                съешь ещё этих мягких французских булок, да выпей чаю
                съешь ещё этих мягких французских булок, да выпей чаю
                съешь ещё этих мягких французских булок, да выпей чаю
                съешь ещё этих мягких французских булок, да выпей чаю`,
                `съешь ещё этих мягких французских булок, да выпей чаю
                съешь ещё этих мягких французских булок, да выпей чаю
                съешь ещё этих мягких французских булок, да выпей чаю`,
            ],
        };
    }


    GenresContainer = function (props) {
        return (
            <div className="genres__container container">
                <div className="genres__container_photo">
                    <img alt="" src={props.imgSrc}/>
                </div>
                <div className="genres__container_info">
                    {props.parargaphs.map((p, i) => <p key={i}>{p}</p>)}
                </div>
            </div>
        );
    };

    render() {
        return (
            <div className="genres">
                <this.GenresContainer imgSrc="/home/photos/vertical/3.png" parargaphs={this.genresDescriptions.first}/>
                <this.GenresContainer imgSrc="/home/photos/vertical/3.png" parargaphs={this.genresDescriptions.second}/>
                <this.GenresContainer imgSrc="/home/photos/vertical/3.png" parargaphs={this.genresDescriptions.third}/>
            </div>
        );
    }
}
