import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import img1 from '../assets/img1.jpg'
import "../styles/carousel.css"

const CarouselPage = () => {
  return ( 
    <Carousel showStatus={false} showThumbs={false} className='carousel'>
      <div>
        <img className='carousel-image' src={img1} />
      </div>
      <div>
        <img src="https://placehold.co/200x200" />
      </div>
      <div>
        <img src="https://placehold.co/300x300" />
      </div>
    </Carousel>
  );
};

export default CarouselPage;