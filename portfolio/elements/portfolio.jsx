import React from 'react';
import { debounce, isMobileOrTablet } from '@assets/utils';
import Loader from '@elements/loader';
import thumbnails from './thumbnails.json';

/**
 * Main component for portfolio page. The page contains several
 * thumbnails of different photo sessions.
 * @component
 */
export default class Portfolio extends React.Component {
    constructor(props) {
        super(props);
        const isMobile = window.innerWidth < 900 && window.innerWidth < window.innerHeight;
        import('react-image-gallery').then(({ default: ImageGallery }) => {
            this.galleries = thumbnails.map(thumbnail => {
                const items = [];
                for (let i = 0; i < thumbnail.amount; i++) {
                    items.push({
                        original: `${thumbnail.src}/${i}.jpg`,
                        thumbnail: `${thumbnail.src}/${i}m.jpg`,
                    });
                }
                return (
                    <div className="gallery">
                        <ImageGallery key={Math.random()}
                                      items={items}
                                      thumbnailPosition={isMobile ? 'bottom' : 'left'}
                                      showPlayButton={false}
                                      onImageLoad={this.onGalleryLoad}
                                      showFullscreenButton={!isMobile} />
                        <button className="gallery__close" onClick={this.onCloseClick} type="button">
                            &times;
                        </button>
                        <Loader isMain={false} isDark />
                    </div>
                );
            });
        });
        this.state = {
            gallery: null,
        };
        this.imagesLoaded = 0;
    }

    componentDidMount() {
        window.addEventListener('hashchange', () => {
            const closeBtn = document.querySelector('.gallery__close');
            if (window.location.hash === '' && closeBtn) {
                closeBtn.click();
            }
        });
        if (!isMobileOrTablet()) return;
        const checkElementVisibility = function (elm) {
            const rect = elm.getBoundingClientRect();
            const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
            return !(rect.bottom < 150 || rect.top - viewHeight >= -150);
        };
        window.addEventListener('scroll', debounce(() => {
            document.querySelectorAll('.thumbnail')
                .forEach(it => {
                    const photo = it.querySelector('.item__photo');
                    if (checkElementVisibility(it)) {
                        photo.classList.add('hover');
                    } else {
                        photo.classList.remove('hover');
                    }
                });
        }));
        window.dispatchEvent(new Event('scroll'));
    }

    /**
     * The thumbnail of photo session.
     * @param {Object} props
     * @param {String} props.title - a title of photo session.
     * @param {String} props.src - a source of photo session's image.
     * @component
     */
    Thumbnail = props => (
        <div className="item thumbnail" onClick={this.onThumbnailClick.bind(this, props.index)} role="button" tabIndex="0">
            <div className="item__photo">
                <img alt={props.title} src={`${props.src}.jpg`} />
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
        const { gallery } = this.state;
        return gallery;
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
        this.setState({ gallery: this.galleries[index] });
        const onEscPressed = evt => {
            if (evt.key !== 'Escape') return;
            this.onCloseClick();
            document.removeEventListener('keyup', onEscPressed);
        };
        document.addEventListener('keyup', onEscPressed);
        window.location.hash = 'gallery';
    };

    /**
     * Closes the gallery.
     * @callback
     */
    onCloseClick = () => {
        this.setState({ gallery: null });
    };

    render() {
        return (
            <div className="body container">
                <div className="portfolio">
                    {thumbnails.map((thumbnail, i) => (
                        <this.Thumbnail key={Math.random()} {...thumbnail} index={i} />
                    ))}
                </div>
                <this.CurrentGallery />
            </div>
        );
    }
}
