"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper/modules";
import SingleTestimonial from "../Testimonials/SingleTestimonial";

export default function TestimonialCarousel({
  carouselData,
}: {
  carouselData: unknown[];
}) {
  type CustomStyles = {
    [key: string]: string; // Allow any custom property as long as it's a string
  };

  // Inside your component:
  const customStyles: CustomStyles = {
    "--swiper-navigation-color": "#000",
    "--swiper-pagination-color": "#000",
    "--swiper-navigation-size": "22px",
    "--swiper-navigation-sides-offset": "0px",
    "--swiper-pagination-bottom": "0px",
  };

  // Then apply it to the style prop

  return (
    <>
      <div className="container">
        <Swiper
          slidesPerView={3}
          spaceBetween={10}
          navigation={true}
          modules={[Navigation, Pagination]}
          style={customStyles}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            298: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          className="mySwiper pt-4"
        >
          <div className="">
            {carouselData &&
              carouselData.map((testimonial, index) => (
                <SwiperSlide key={`index-${index}`}>
                  {" "}
                  <SingleTestimonial
                    key={index}
                    testimonial={testimonial}
                  />
                </SwiperSlide>
              ))}
          </div>
        </Swiper>
      </div>
    </>
  );
}
