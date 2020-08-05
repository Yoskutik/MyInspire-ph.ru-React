import React from 'react';
import { createKeywordGenerator } from '@assets/utils';
import Image from './image';
import '../../styles/collage.scss';

/**
 * The Collage component. Consists of 2 images. Preview in this element must take turns
 * and create the illusion of a slide show.
 * @component
 */
export default class Collage extends React.Component {
  constructor() {
    super();
    this.vertList = [...Array(26).keys()].sort(() => Math.random() - 0.5);
    this.isMobile = window.innerWidth < 700 && window.innerWidth < window.innerHeight;

    const src = `/home/photos/${this.isMobile ? `vertical/${this.vertList[0]}` : 'horizontal/0'}`;
    const altGenerator = createKeywordGenerator();
    const images = [
      <Image src={src} key={Math.random()} alt={altGenerator.next().value} onLoad={this.onFirstImageLoaded} />,
    ];
    this.index = 1;
    this.state = { images };
  }

  onFirstImageLoaded = () => {
    setTimeout(() => {
      const { images } = this.state;
      const src = `/home/photos/${this.isMobile ? `vertical/${this.vertList[this.index++]}` : 'horizontal/0'}`;
      const altGenerator = createKeywordGenerator();
      images.unshift(
        <Image src={src} key={Math.random()} alt={altGenerator.next().value} />,
      );
      this.setState({ images });
      this.onImagesLoaded();
    });
  };

  onImagesLoaded = () => {
    if (!this.isMobile) return;
    const altGenerator = createKeywordGenerator();
    setInterval(() => {
      if (document.visibilityState === 'hidden') return;
      const DOMImages = document.querySelectorAll('.collage__img');
      DOMImages[DOMImages.length - 1].style.opacity = '0';
      const { images } = this.state;
      // eslint-disable-next-line max-len
      const src = `/home/photos/${this.isMobile ? `vertical/${this.vertList[this.index % this.vertList.length]}` : 'horizontal/0'}`;
      images.unshift(
        <Image src={src} key={Math.random()} alt={altGenerator.next().value} />,
      );
      this.index++;
      this.setState({ images });
    }, 6000);
  };

  render() {
    return (
      <div className="collage">
        {this.state.images}
      </div>
    );
  }
}
