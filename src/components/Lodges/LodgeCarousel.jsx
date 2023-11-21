import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import img1 from '../../assets/img1.jpg'
import "../../styles/lodgeCarousel.css"

const LodgeCarousel = () => {
  return (
    <>
      <div className='lodge-carousel-title'>
        <h2>Gallery</h2>
      </div>
      <Carousel showStatus={false} showThumbs={false} className='lodge-carousel'>
        <div>
          <img className='lodge-carousel-image' src={img1} />
        </div>
        <div>
          <img className='lodge-carousel-image' src={img1} />
        </div>
        <div>
          <img className='lodge-carousel-image' src={img1} />
        </div>
      </Carousel>
    </>
  );
};

export default LodgeCarousel;