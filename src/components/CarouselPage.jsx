import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useEffect, useState } from 'react';
import useWindowDimensions from '../hooks/useWindowsDimensions';

import img1 from '../assets/img1.jpg'
import hunting1 from '../assets/hunting1.jpg'
import hunting2 from '../assets/hunting2.jpg'
import hunting3 from '../assets/hunting3.jpg'
import hunting4 from '../assets/hunting4.jpg'
import hunting5 from '../assets/hunting5.jpg'
import hunting6 from '../assets/hunting6.jpg'
import hunting7 from '../assets/hunting7.jpg'
import hunting8 from '../assets/hunting8.jpg'
import hunting9 from '../assets/hunting9.jpg'
import hunting10 from '../assets/hunting10.jpg'
import hunting11 from '../assets/hunting11.jpg'
import "../styles/carousel.css"

const allImages = [
  {src: img1, bigScreen: true},
  {src: hunting1, bigScreen: true},
  {src: hunting2, bigScreen: false},
  {src: hunting3, bigScreen: true},
  {src: hunting4, bigScreen: false},
  {src: hunting5, bigScreen: true},
  {src: hunting6, bigScreen: false},
  {src: hunting7, bigScreen: true},
  {src: hunting8, bigScreen: true},
  {src: hunting9, bigScreen: false},
  {src: hunting10, bigScreen: false},
  {src: hunting11, bigScreen: true},
]

const CarouselPage = () => {
  const { height, width } = useWindowDimensions();

  const bigScreenOnlyImages = allImages.filter(i => i.bigScreen)



  return ( 
      width > 1200 ?
      <Carousel showStatus={false} showThumbs={false} className='carousel' selectedItem={0}>
        {bigScreenOnlyImages.map(i => 
          <div key={i.src}>
            <img className='carousel-image' src={i.src} alt='hunting image'/>
          </div>
        )}
      </Carousel>
      :
      <Carousel showStatus={false} showThumbs={false} className='carousel' selectedItem={0} >
        {allImages.map(i => 
          <div key={i.src}>
            <img className='carousel-image' src={i.src} alt='hunting image'/>
          </div>
        )}
      </Carousel>
    

  );
};

export default CarouselPage;