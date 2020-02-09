import React from 'react';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import Stories from 'react-insta-stories';

// import avatar from '../../assets/profile-pic.png';
import carolina from '../../assets/antioquia/carolina.jpg';
import guatape from '../../assets/antioquia/guatape.jpeg';
import laCeja from '../../assets/antioquia/la-ceja.jpeg';
import venecia from '../../assets/antioquia/venecia.jpeg';
import belmira from '../../assets/antioquia/belmira.jpeg';

const images = [
  {
    src: carolina,
    alt: 'carolina',
    title: 'Carolina del príncipe',
    desc: 'Lake, sun and forests.'
  },
  {
    src: guatape,
    alt: 'guatape',
    title: 'Guatapé',
    desc: 'Big rock from the top.'
  },
  {
    src: laCeja,
    alt: 'la-ceja',
    title: 'La Ceja',
    desc: 'Magic waterfall.'
  },
  {
    src: venecia,
    alt: 'venecia',
    title: 'Venecia',
    desc: 'Highest natural pyramid in the world.'
  },
  {
    src: belmira,
    alt: 'belmira',
    title: 'Belmira',
    desc: 'Unique ecosystem from Colombia'
  },
];

const AntioquiaImages = () => {
		return (
      <Carousel
      additionalTransfrom={0}
      arrows
      autoPlaySpeed={3000}
      centerMode={false}
      className=""
      containerClass="container"
      dotListClass=""
      draggable
      focusOnSelect={false}
      infinite
      itemClass=""
      keyBoardControl
      minimumTouchDrag={80}
      responsive={{
        desktop: {
          breakpoint: {
            max: 3000,
            min: 1024
          },
          items: 1
        },
        mobile: {
          breakpoint: {
            max: 464,
            min: 0
          },
          items: 1
        },
        tablet: {
          breakpoint: {
            max: 1024,
            min: 464
          },
          items: 1
        }
      }}
      sliderClass=""
      slidesToSlide={1}
      swipeable
    >
      {images.map(image => (
        <div>
          <img
            src={image.src}
            alt={image.alt}
            style={{
              display: 'block',
              height: 'auto',
              margin: 'auto',
              width: '100%'
            }}
          />
          <h6>{image.title}</h6>
          <p>{image.desc}</p>
        </div>
      ))}
      </Carousel>
    );
}

export default AntioquiaImages;