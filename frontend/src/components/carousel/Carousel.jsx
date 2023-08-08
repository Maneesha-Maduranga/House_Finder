import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';

import './style.css';

//Component
import BgImage from './BgImage';

import image01 from '../../assets/image01.jpg';
import image02 from '../../assets/image02.jpg';

function Carousel() {
  return (
    <div className='w-full pt-10'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        effect={'fade'}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, EffectFade]}
        className='h-screen'
      >
        <SwiperSlide>
          <BgImage image={image01} />
        </SwiperSlide>
        <SwiperSlide>
          <BgImage image={image02} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Carousel;
