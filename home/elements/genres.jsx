import React from 'react';
import genres from './genres.json';

/**
 * A section of home page which goes after Collage. Contains information
 * about photographer's genres of work.
 * @component
 */
export default class Genres extends React.Component {
    /**
     * Creates a sample of genres. Each sample must have an image and
     * a description.
     * @param {Object} props
     * @param {String} props.imgSrc - a source of the image.
     * @param {Array<String>} props.paragraphs - an array of paragraphs which
     * are stored in the genre description.
     * @component
     */
    GenresContainer = (props) => (
        <div className="genres__container container">
            <div className="genres__container_photo">
                <img alt="" src={props.imgSrc}/>
            </div>
            <div className="genres__container_info">
                {props.paragraphs.map((p, i) =>
                    <p key={i}>{p}</p>
                )}
            </div>
        </div>
    );

    render() {
        return (
            <div className="genres">
                {genres.map((genre, i) =>
                    <this.GenresContainer key={i} {...genre}/>
                )}
            </div>
        );
    }
}
