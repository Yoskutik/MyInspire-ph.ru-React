import React from 'react';
import { checkElementVisibility, debounce, isMobileOrTablet } from '@assets/utils';
import Loader from '@elements/loader';
import Thumbnail from './thumbnail';

/**
 * Main component for portfolio page. The page contains several
 * thumbnails of different photo sessions.
 * @component
 */
export default class Portfolio extends React.Component {
  constructor(props) {
    super(props);

    const thumbnails = require.context('../photos/thumbnails/', true)
      .keys()
      .filter(ph => ph.endsWith('.jpg'))
      .sort(() => Math.random() - 0.5)
      .map(ph => ph.replace(/^\.\//, '').replace(/\.jpg$/, ''));
    this.thumbnails = thumbnails;

    const originals = {};
    require.context('../photos/originals/', true)
      .keys()
      .filter(ph => ph.endsWith('m.jpg'))
      .forEach(ph => {
        const [title, path] = ph.replace(/^\.\//, '').replace(/m\.jpg$/, '').split('/');
        if (!Object.keys(originals).includes(title)) {
          originals[title] = [];
          if (!thumbnails.includes(title)) {
            console.warn(`${title} is not presented in the thumbnails list.`);
          }
        }
        originals[title].push(path);
      });

    const isMobile = window.innerWidth < 900 && window.innerWidth < window.innerHeight;
    import('react-image-gallery').then(({ default: ImageGallery }) => {
      this.galleries = thumbnails.map(title => {
        const items = originals[title].map(ph => ({
          original: `photos/originals/${title}/${ph}.jpg`,
          thumbnail: `photos/originals/${title}/${ph}m.jpg`,
        }));
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
      if (window.location.hash === '') {
        this.setState({ gallery: null });
      }
    });
    if (!isMobileOrTablet()) return;
    window.addEventListener('scroll', debounce(() => {
      document.querySelectorAll('.thumbnail')
        .forEach(it => {
          const photo = it.querySelector('.item__photo');
          if (checkElementVisibility(it, true)) {
            photo.classList.add('hover');
          } else {
            photo.classList.remove('hover');
          }
        });
    }));
    window.dispatchEvent(new Event('scroll'));
  }

  /**
   * Each photo session has its own photos. To show each of them
   * separately it is created a gallery component for each session.
   * This component chooses what gallery to show now.
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

  onCloseClick = () => {
    this.setState({ gallery: null });
    window.history.back();
  };

  render() {
    return (
      <div className="body container">
        <h1 className="super-hidden">
          Портфолио
        </h1>
        <div className="portfolio">
          {this.thumbnails.map((title, i) => (
            <Thumbnail key={Math.random()} title={title} onClick={() => this.onThumbnailClick(i)} />
          ))}
        </div>
        <this.CurrentGallery />
      </div>
    );
  }
}
