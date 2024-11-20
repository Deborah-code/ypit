import TestimonialCard from "@/components/home/TestimonialCard";
import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Mousewheel } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";

interface Testimonial {
  name: string;
  img: string;
  role: string;
  comment: string;
  key: number;
}
const testimonials: Testimonial[] = [
  {
    name: "Jemima",
    img: "",
    role: "Digital Marketer",
    comment:
      "When I attended the last one I came as an aspiring tech enthusiast, I met a lot of people and now here I am a digital marketer all thanks to YPIT's orientations.",
    key: 0,
  },
  {
    name: "Femi",
    img: "",
    role: "Tech Lawyer",
    comment:
      "Was a beautiful concept, very lively, practical and a pool for networking.",
    key: 0,
  },
  {
    name: "David",
    img: "",
    role: "Aspring Web Developer",
    comment:
      "It was nice and very educative, I met a lot of bright thinking people.",
    key: 0,
  },
  {
    name: "Oluwatobi",
    img: "",
    role: "Business process engineer",
    comment:
      "It was awesome. I got to network with likeminded people who I am still in contact with",
    key: 0,
  },
];
const Carousel: React.FC = () => {
  //swiper instance to enable swiping with buttons
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  //state index that monitors the current slide
  const [activeIndex, setActiveIndex] = useState(0);

  const handleMovingToNextSlide = () => {
    if (swiper && activeIndex < testimonials.length - 1) {
      swiper.slideTo(activeIndex + 1);
    }
  };

  const handleMovingToPrevSlide = () => {
    if (swiper && activeIndex > 0) {
      swiper.slideTo(activeIndex - 1);
    }
  };
  return (
    <div className="relative w-full">
      <h1 className="text-4 md:text-2 pt-5 md:pt-1 pb-8 md:pd-4">
        Testimonials from our members
      </h1>
      <div>
        <Swiper
          onSwiper={setSwiper}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          slidesPerView={1}
          keyboard={true}
          spaceBetween={60}
          mousewheel={{
            forceToAxis: true,
            releaseOnEdges: true,
          }}
          modules={[Mousewheel]}
          breakpoints={{
            440: { slidesPerView: 1.6 },
            540: { slidesPerView: 1.9 },
            640: { slidesPerView: 2.1 },
            740: { slidesPerView: 2.25 },
            768: { slidesPerView: 1.6 },
            940: { slidesPerView: 1.8 },
            1040: { slidesPerView: 2.0 },
            1190: { slidesPerView: 2.3 },
            1225: { slidesPerView: 2.6 },
          }}
          style={{
            overflow: "visible",
            justifyContent: "end",
            textAlign: "start",
            width: "100%",
          }}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.key}>
              <TestimonialCard
                name={testimonial.name}
                img={testimonial.img}
                role={testimonial.role}
                comment={testimonial.comment}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute top-[60%] left-0 right-0 z-20 flex justify-between px-7 transform -translate-y-1/2">
          <button
            className="bg-white bg-opacity-95 disabled:opacity-50 hover:bg-opacity-100 duration-500 text-black rounded-full shadow flex items-center justify-center w-5 h-5 text-sm"
            onClick={handleMovingToPrevSlide}
            disabled={activeIndex === 0}
          >
            <IoIosArrowBack size={24} />
          </button>
          <button
            className="bg-white bg-opacity-95 disabled:opacity-50 hover:bg-opacity-100 duration-500 text-black rounded-full shadow flex items-center justify-center w-5 h-5 text-sm"
            onClick={handleMovingToNextSlide}
            disabled={activeIndex === testimonials.length - 1}
          >
            <IoIosArrowForward size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
