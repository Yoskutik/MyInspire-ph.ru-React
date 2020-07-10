import React from 'react';
import ImageGallery from 'react-image-gallery';
import thumbnails from './thumbnails.json';
import Loader from "../../assets/elements/loader";

/**
 * Main component for portfolio page. The page contains several
 * thumbnails of different photo sessions.
 * @component
 */
export default class Portfolio extends React.Component {
    constructor(props) {
        super(props);
        this.galleries = thumbnails.map((thumbnail, i) => {
            let items = [];
            for (let i = 0; i < thumbnail.gallery.amount; i++) {
                items.push({
                    original: `${thumbnail.gallery.href}/${i}.png`,
                    thumbnail: `${thumbnail.gallery.href}/${i}m.png`,
                })
            }
            return (
                <div className="gallery">
                    <ImageGallery key={i} items={items} thumbnailPosition="left" showPlayButton={false}
                                  onImageLoad={this.onGalleryLoad.bind(this, thumbnail.gallery.amount)}/>
                    <button className="gallery__close" onClick={this.onCloseClick.bind(this)}>&times;</button>
                    <Loader isMain={false} isDark={true}/>
                </div>
            )
        });
        this.state = {
            gallery: null
        };
        this.imagesLoaded = 0;
    }

    /**
     * The thumbnail of photo session.
     * @param {Object} props
     * @param {String} props.title - a title of photo session.
     * @param {String} props.src - a source of photo session's image.
     * @component
     */
    Thumbnail = props => (
        <div className="item" onClick={this.onThumbnailClick.bind(this, props.index)}>
            <div className="item__photo">
                <img alt={props.title} src={props.src}/>
                <div className="item__title">{props.title}</div>
            </div>
        </div>
    );

    /**
     * Each photo session has its own photos. To show each of them
     * separately it is created a gallery component for each session.
     * This component chooses what gallery to show now.
     * @component
     */
    CurrentGallery = () => {
        if (this.state === null) {
            return null;
        }
        return this.state.gallery;
    };

    /**
     * When all images are loaded, removes an extra Loader component.
     * @param {Number} amount - the amount of images in the session.
     * @callback
     */
    onGalleryLoad = amount => {
        if (++this.imagesLoaded === amount) {
            document.querySelector('.loader').style.opacity = '0';
            this.imagesLoaded = 0;
        }
    };

    /**
     * By clicking on the thumbnail it opens its gallery of photos.
     * When gallery is opened, it should be possible to close it
     * using "Escape" button.
     * @param {Number} index - index of the session in the list of all
     * sessions.
     * @callback
     */
    onThumbnailClick = index => {
        this.setState({gallery: this.galleries[index]});
        let onEscPressed = evt => {
            if (evt.key !== 'Escape') return;
            this.onCloseClick();
            document.removeEventListener('keyup', onEscPressed);
        };
        document.addEventListener('keyup', onEscPressed);
    };

    /**
     * Closes the gallery.
     * @callback
     */
    onCloseClick = () => {
        this.setState({gallery: null});
    };

    render() {
        return (
            <div className="body container">
                <div className="portfolio">
                    {thumbnails.map((thumbnail, i) =>
                        <this.Thumbnail key={i} {...thumbnail} index={i}/>
                    )}
                </div>
                <this.CurrentGallery/>
            </div>
        );
    }
}
