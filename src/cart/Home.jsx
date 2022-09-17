import React, { useState } from 'react'
import { Carousel, CarouselItem, CarouselControl } from 'reactstrap'
import slider1 from './images/slider1.jpg'
import slider2 from './images/slider2.jpg'
import slider3 from './images/slider3.jpg'
import '../App.css';

//getting all the images into Array object
const items = [
    {
        id: 1,
        src: slider1
    },
    {
        id: 2,
        src: slider2,
    },
    {
        id: 3,
        src: slider3,
    }
]


const Home = () => {
    //this hook will shift our index number of images (move the images)
    const [activeIndex, setActiveIndex] = useState(0);
    //this hook apply the animation effect on slider
    const [animating, setAnimating] = useState(false);

    //functions that will apply on both arrows
    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const previous = () => {
        if (animating) return;
        const previousIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(previousIndex);
    };

    //running a map to fetch all the images from the items array
    const slides = items.map((item) => {
        return (
            <CarouselItem
                key={item.id}
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
            >
                <img src={item.src} id='images' />
            </CarouselItem>
        );
    });

    return (
        <Carousel activeIndex={activeIndex} next={next} previous={previous}>
            {slides}
            <CarouselControl
                direction="prev"
                directionText="Previous"
                onClickHandler={previous}
            />
            <CarouselControl
                direction="next"
                directionText="Next"
                onClickHandler={next}
            />
        </Carousel>
    )
}

export default Home