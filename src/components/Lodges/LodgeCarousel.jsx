import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import "../../styles/lodgeCarousel.css"
import { useTranslation } from 'react-i18next';

// images imports
import mataco1 from '../../assets/mataco1.jpg'
import mataco2 from '../../assets/mataco2.jpg'
import mataco3 from '../../assets/mataco3.jpg'
import mataco4 from '../../assets/mataco4.jpg'
import mataco5 from '../../assets/mataco5.jpg'
import mataco6 from '../../assets/mataco6.jpg'
import mataco7 from '../../assets/mataco7.jpg'
import mataco8 from '../../assets/mataco8.jpg'

import teros1 from '../../assets/teros1.jpg'
import teros2 from '../../assets/teros2.jpg'
import teros3 from '../../assets/teros3.jpg'
import teros4 from '../../assets/teros4.jpg'
import teros5 from '../../assets/teros5.jpg'
import teros6 from '../../assets/teros6.jpg'
import teros7 from '../../assets/teros7.jpg'
import teros8 from '../../assets/teros8.jpg'
import teros9 from '../../assets/teros9.jpg'
import teros10 from '../../assets/teros10.jpg'
import teros11 from '../../assets/teros11.jpg'
import teros12 from '../../assets/teros12.jpg'

import picazo1 from '../../assets/picazo1.jpg'
import picazo2 from '../../assets/picazo2.jpg'
import picazo3 from '../../assets/picazo3.jpg'
import picazo4 from '../../assets/picazo4.jpg'
import picazo5 from '../../assets/picazo5.jpg'
import picazo6 from '../../assets/picazo6.jpg'

const images = {
  mataco1,
  mataco2,
  mataco3,
  mataco4,
  mataco5,
  mataco6,
  mataco7,
  mataco8,
  teros1,
  teros2,
  teros3,
  teros4,
  teros5,
  teros6,
  teros7,
  teros8,
  teros9,
  teros10,
  teros11,
  teros12,
  picazo1,
  picazo2,
  picazo3,
  picazo4,
  picazo5,
  picazo6,
}


const LodgeCarousel = (props) => {
  
  const { t } = useTranslation()

  return (
    <>
      <div className='lodge-carousel-title'>
        <h2>{t('lodgePage.gallery')}</h2>
      </div>
      <Carousel showStatus={false} showThumbs={false} className='lodge-carousel'>
        {props.imgs.map(i => 
          <div>
            <img className='lodge-carousel-image' src={images[i.src]} key={i.src} alter={'Lodge front'} />
          </div>
        )}
      </Carousel>
    </>
  );
};

export default LodgeCarousel;