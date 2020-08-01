import React from 'react';
import verticalPhotosList from './verticalPhotosList.json';

/**
 * The Collage component. Consists of 2 images. Images in this element must take turns
 * and create the illusion of a slide show.
 * @component
 */
export default class Collage extends React.Component {
    constructor() {
        super();
        this.verticalPhotosList = verticalPhotosList.sort(() => Math.random() - 0.5);
        this.isMobile = window.innerWidth < 700 && window.innerWidth < window.innerHeight;
        this.totalHorizontalPhotos = 3;

        const Image = ({ src }) => (
            <img className="collage__img" alt="" src={src} onTransitionEnd={evt => evt.target.remove()} />
        );
        this.a = Image;

        const images = [];
        for (let i = 0; i < 2; i++) {
            const src = this.isMobile ? this.verticalPhotosList[i] : '/home/photos/0.jpg';
            // const src = this.isMobile ? this.verticalPhotosList[i] : `/home/photos/${i}.jpg`;
            images.push(
                <Image src={src} key={Math.random()} />,
            );
        }
        this.Image = Image;
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
            const src = this.isMobile
                ? this.verticalPhotosList[this.indexOfCurrent % this.verticalPhotosList.length]
                : `/new_home/photos/${this.indexOfCurrent % this.totalHorizontalPhotos}.jpg`;
            images.unshift(
                <this.Image src={src} key={Math.random()} />,
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
