// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { FaQuoteLeft } from 'react-icons/fa';
// import required modules
import { Navigation } from "swiper/modules";
import SectionTitle from "../Titles/SectionTitle";

import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div>
      <SectionTitle
        subHeading={"What Our Clients Say"}
        heading={"TESTIMONIALS"}
      />
      <Swiper navigation={true} modules={[Navigation]}  className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="max-w-[80%] mx-auto space-y-6">
            <Rating style={{ maxWidth: 180, margin:"auto" }} value={review.rating} readOnly />
            <p className="text-7xl text-center w-fit mx-auto"><FaQuoteLeft/></p>
            <p>{review.details}</p>
            <p className="text-2xl text-[#CD9003]">{review.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
