import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination } from "swiper/modules";

const SwipeBars = () => {
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={30}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img src="/assets/home/slide1.jpg" alt="slide1" />
        <h3 className="text-white text-2xl -mt-20 shadow-xl ">SALADS</h3>
      </SwiperSlide>
      <SwiperSlide>
        <img src="/assets/home/slide2.jpg" alt="slide2" />
        <h3 className="text-white text-2xl -mt-20 shadow-xl ">PIZZAS</h3>
      </SwiperSlide>
      <SwiperSlide>
        <img src="/assets/home/slide3.jpg" alt="slide3" />
        <h3 className="text-white text-2xl -mt-20 shadow-xl ">SOUPS</h3>
      </SwiperSlide>
      <SwiperSlide>
        <img src="/assets/home/slide4.jpg" alt="slide4" />
        <h3 className="text-white text-2xl -mt-20 shadow-xl ">DESERTS</h3>
      </SwiperSlide>
      <SwiperSlide >
        <img src="/assets/home/slide5.jpg" alt="slide5" />
        <h3 className="text-white text-2xl -mt-14 shadow-xl ">SALADS</h3>
      </SwiperSlide>
    </Swiper>
  );
};

export default SwipeBars;
