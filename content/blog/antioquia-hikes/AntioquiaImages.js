import React from 'react';
import Stories from 'react-insta-stories';

import avatar from '../../assets/profile-pic.png';
import carolina from '../../assets/antioquia/carolina.jpg';
import guatape from '../../assets/antioquia/guatape.jpeg';
import laCeja from '../../assets/antioquia/la-ceja.jpeg';
import venecia from '../../assets/antioquia/venecia.jpeg';
import belmira from '../../assets/antioquia/belmira.jpeg';

const stories = [
    {
      url: carolina,
      header: {
        heading: 'Carolina del Príncipe',
        subheading: 'Hidden lake and forests.',
        profileImage: avatar,
      }
    },
    {
      url: guatape,
      header: {
        heading: 'Guatapé -  San Rafael',
        subheading: 'Big rock from the top.',
        profileImage: avatar
      }
    },
    {
      url: laCeja,
      header: {
        heading: 'La Ceja',
        subheading: 'Magic waterfall.',
        profileImage: avatar
      }
    },
    {
      url: venecia,
      header: {
        heading: 'Venecia',
        subheading: 'Most high natural pyramid in the world.',
        profileImage: avatar
      }
    },
    {
      url: belmira,
      header: {
        heading: 'Belmira',
        subheading: 'Unique ecosystem from Colombia.',
        profileImage: avatar
      }
    },
];


const AntioquiaImages = () => {
    const ssr = typeof document === 'undefined';
		return (
      <>
      {!ssr &&
        <Stories
          stories={stories}
          defaultInterval={1000 * 5}
          width={432}
          height={768}
        />
      }
      </>
		);
}

export default AntioquiaImages;