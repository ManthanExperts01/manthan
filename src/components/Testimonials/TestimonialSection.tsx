'use client';
import React, { useState } from 'react';
import Slider from 'react-slick';
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react';
import SingleTestimonial from './SingleTestimonial';

const TestimonialSection = ({ carouselData }) => {
  const settings = {
    dots: true,
    infinite: true,
    customPaging: function (i) {
      return (
        <a className="">
          <span className="mx-2 rounded-l-full rounded-r-full h-4 w-4 block cursor-pointer transition-all "></span>
        </a>
      );
    },
    dotsClass: 'slick-dots absolute mt-30 flex',
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [sliderRef, setSliderRef] = useState(null);

  return (
    <div className="relative">
      <Slider {...settings} arrows={false} ref={setSliderRef} className="flex items-stretch justify-items-stretch">
        {carouselData?.map((testimonial, index) => (
          <div className="px-3 flex items-stretch" key={`id-${index}`}>
            <SingleTestimonial key={index} testimonial={testimonial} />
          </div>
        ))}
      </Slider>
      <div className="absolute transform flex justify-between w-full px-4 mt-8 sm:mt-2">
        <div
          className="flex items-center justify-center h-14 w-14 rounded-full bg-white border-secondary border hover:bg-secondary hover:text-white transition-all text-secondary cursor-pointer"
          onClick={() => sliderRef.slickPrev()}
        >
          <IconArrowLeft />
        </div>
        <div
          className="flex items-center justify-center h-14 w-14 rounded-full bg-white border-secondary border hover:bg-secondary hover:text-white transition-all text-secondary cursor-pointer"
          onClick={() => sliderRef.slickNext()}
        >
          <IconArrowRight />
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
