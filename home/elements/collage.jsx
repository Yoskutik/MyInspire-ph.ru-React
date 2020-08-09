import React from 'react';
import { createKeywordGenerator } from '@assets/utils';
import { ArrowIcon } from '@elements/icons';
import Picture from '@elements/picture';
import '../styles/collage.scss';

/**
 * The Collage component. Consists of 2 images. Preview in this element must take turns
 * and create the illusion of a slide show.
 * @component
 */
export default class Collage extends React.Component {
  constructor() {
    super();
    this.vertList = require.context('../photos/', true)
      .keys()
      .filter(ph => ph.includes('/vertical/') && ph.endsWith('.jpg'))
      .map(it => `/home/photos/${it.replace('.jpg', '').replace('./', '')}`)
      .sort(() => Math.random() - 0.5);
    this.isMobile = window.innerWidth < 700 && window.innerWidth < window.innerHeight;

    const altGenerator = createKeywordGenerator();
    const images = [{
      src: this.isMobile ? this.vertList[0] : '/home/photos/horizontal/0',
      alt: altGenerator.next().value,
    }];
    if (this.isMobile) {
      this.index = 2;
      images.push({
        src: this.vertList[1],
        alt: altGenerator.next().value,
      });
    } else {
      this.index = 1;
    }
    this.state = { images };
  }

  componentDidMount() {
    if (!this.isMobile) return;
    const altGenerator = createKeywordGenerator();
    setInterval(() => {
      const DOMImages = document.querySelectorAll('.collage__img');
      DOMImages[DOMImages.length - 1].style.opacity = '0';
      DOMImages[DOMImages.length - 1].addEventListener('transitionend', evt => {
        if (evt.propertyName === 'opacity') {
          const { images } = this.state;
          images.pop();
          images.unshift({
            src: this.vertList[this.index++ % this.vertList.length],
            alt: altGenerator.next().value,
          });
          this.index++;
          this.setState({ images });
        }
      });
    }, 6000);
  }

  render() {
    return (
      <div className="collage">
        {this.state.images.map(image => (
          <Picture className="collage__img" key={Math.random()} {...image} />
        ))}
        <ArrowIcon className="collage__arrow" size="20" />
      </div>
    );
  }
}
