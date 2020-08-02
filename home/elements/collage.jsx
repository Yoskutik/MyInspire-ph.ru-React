import React from 'react';
import Image from './image';

/**
 * The Collage component. Consists of 2 images. Images in this element must take turns
 * and create the illusion of a slide show.
 * @component
 */
export default class Collage extends React.Component {
    constructor() {
        super();
        this.verticalPhotosList = [...Array(26).keys()].sort(() => Math.random() - 0.5);
        this.isMobile = window.innerWidth < 700 && window.innerWidth < window.innerHeight;

        const images = [];
        for (let i = 0; i < 2; i++) {
            const src = `/home/photos/${this.isMobile ? `vertical/${this.verticalPhotosList[i]}` : 'horizontal/0'}`;
            images.push(
                <Image src={src} key={Math.random()} />,
            );
        }
        this.indexOfCurrent = 2;
        this.state = { images };
    }

    componentDidMount() {
        if (!this.isMobile) return;
        setInterval(() => {
            if (document.visibilityState === 'hidden') return;
            const DOMImages = document.querySelectorAll('.collage__img');
            DOMImages[DOMImages.length - 1].style.opacity = '0';
            const { images } = this.state;
            // eslint-disable-next-line max-len
            const src = `/home/photos/${this.isMobile ? `vertical/${this.verticalPhotosList[this.indexOfCurrent % this.verticalPhotosList.length]}` : 'horizontal/0'}`;
            images.unshift(
                <Image src={src} key={Math.random()} />,
            );
            this.indexOfCurrent++;
            this.setState({ images });
        }, 6000);
    }

    render() {
        return (
            <div className="collage">
                {this.state.images}
            </div>
        );
    }
}
