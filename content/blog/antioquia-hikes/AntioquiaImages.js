import React from 'react';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import Stories from 'react-insta-stories';

import avatar from '../../assets/profile-pic.png';
import carolina from '../../assets/antioquia/carolina.jpg';
import guatape from '../../assets/antioquia/guatape.jpeg';
import laCeja from '../../assets/antioquia/la-ceja.jpeg';
import venecia from '../../assets/antioquia/venecia.jpeg';
import belmira from '../../assets/antioquia/belmira.jpeg';
import copacabana from '../../assets/antioquia/copacabana.jpeg';
import guarne from '../../assets/antioquia/guarne.jpeg';
import sanPedro from '../../assets/antioquia/san-pedro.jpeg';
import sanRafel from '../../assets/antioquia/san-rafael.jpeg';

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
    desc: 'Unique ecosystem from Colombia.'
  },
  {
    src: copacabana,
    alt: 'copacabana',
    title: 'Copacabana',
    desc: 'Be prepared for a lot of climbing.'
  },
  {
    src: guarne,
    alt: 'guarne',
    title: 'Guarne',
    desc: 'Mysterious forest and lake. You can go at night too.'
  },
  {
    src: sanPedro,
    alt: 'san-pedro',
    title: 'San Pedro',
    desc: 'A lot of green and cows.'
  },
  {
    src: sanRafel,
    alt: 'san-rafael',
    title: 'San Rafael',
    desc: 'The clearest rivers for a great splash.'
  },

];

const AntioquiaImages = () => {
		return (
      <Carousel
      additionalTransfrom={0}
      arrows
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
      showDots
      renderDotsOutside={false}
      renderButtonGroupOutside
      customDot={
        <button style={{
          height: 6,
          width: 48,
          backgroundColor: 'rgba(255, 255, 255, 0.4)',
          borderRadius: 2,
          marginRight: 2,
          marginLeft: 2,
          marginBottom: '134%',
          outline: 'none',
          border: 'none',
        }}>
        </button>
      }
    >
      {images.map(image => (
        <div style={{ position: 'relative' }}>
          <div style={{
            position: 'absolute', zIndex: 10, display: 'flex', alignItems: 'center', // padding: 24,
            width: '100%', backgroundColor: 'rgba(0,0,0,0.3)', padding: '28px 18px 18px 18px',
          }}>
            <div style={{
              backgroundColor: 'white', borderRadius: '50%', height: 48, width: 48, padding: 5,
              marginRight: 10,
              borderImageSlice: 1
            }}>
              <img alt="avatar" src={avatar}/>
            </div>
            <div>
              <h6 style={{
                margin: 0, color: 'white', fontSize: '1rem',
                textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black',
              }}>
                {image.title}
              </h6>
              <span style={{
                color: 'white', fontSize: '0.7rem', textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black'
              }}>
                {image.desc}
              </span>
            </div>
          </div>
          <img
            key={image.alt}
            src={image.src}
            alt={image.alt}
            style={{
              display: 'block',
              height: 'auto',
              margin: 'auto',
              width: '100%'
            }}
          />
        </div>
      ))}
      </Carousel>
    );
}

export default AntioquiaImages;