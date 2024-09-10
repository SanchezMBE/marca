import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';
import CardMedium from './CardMedium';

const Carousel = () => {
  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={30}
      slidesPerView={3}
      navigation
      loop
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      className="mySwiper"
    >
        <SwiperSlide>
          <CardMedium imageSrc="/marca/src/assets/image_4.webp" title="Título del CardMedium 1" text="Descripción del CardMedium 1" />
        </SwiperSlide>
        <SwiperSlide>
          <CardMedium imageSrc="/marca/src/assets/image_4.webp" title="Título del CardMedium 1" text="Descripción del CardMedium 1" />
        </SwiperSlide>
        <SwiperSlide>
          <CardMedium imageSrc="/marca/src/assets/image_4.webp" title="Título del CardMedium 1" text="Descripción del CardMedium 1" />
        </SwiperSlide>
        <SwiperSlide>
          <CardMedium imageSrc="/marca/src/assets/image_4.webp" title="Título del CardMedium 1" text="Descripción del CardMedium 1" />
        </SwiperSlide>
        <SwiperSlide>
          <CardMedium imageSrc="/marca/src/assets/image_4.webp" title="Título del CardMedium 1" text="Descripción del CardMedium 1" />
        </SwiperSlide>
        <SwiperSlide>
          <CardMedium imageSrc="/marca/src/assets/image_4.webp" title="Título del CardMedium 1" text="Descripción del CardMedium 1" />
        </SwiperSlide>
    </Swiper>
  );
};

export default Carousel;