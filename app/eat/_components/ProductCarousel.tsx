import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/pagination";

export default function ProductCarousel() {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      slidesPerView={1}
    >
      <SwiperSlide>Test 1</SwiperSlide>
      <SwiperSlide>Test 2</SwiperSlide>
      <SwiperSlide>Test 3</SwiperSlide>
    </Swiper>
  );
}
