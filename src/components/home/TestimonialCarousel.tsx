import TestimonialCard from "@/components/home/TestimonialCard";
import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Mousewheel } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface Testimonial {
  name: string;
  img: string;
  role: string;
  comment: string;
  key: number;
}
const testimonials: Testimonial[] = [
  {
    name: "Bolu Ademola",
    img: "",
    role: "Data analyst",
    comment:
      "Lorem ipsum dolor sit amet consectetur. Duis pharetra at commodo urna sed eu consectetur eget adipiscing. Elit sed imperdiet diam mi viverra neque vivamus nunc.",
    key: 0,
  },
  {
    name: "Bolu Ademola",
    img: "",
    role: "Data Scientist",
    comment:
      "Lorem ipsum dolor sit amet consectetur. Duis pharetra at commodo urna sed eu consectetur eget adipiscing. Elit sed imperdiet diam mi viverra neque vivamus nunc.",
    key: 0,
  },
  {
    name: "Bolu Ademola",
    img: "",
    role: "Tech analyst",
    comment:
      "Lorem ipsum dolor sit amet consectetur. Duis pharetra at commodo urna sed eu consectetur eget adipiscing. Elit sed imperdiet diam mi viverra neque vivamus nunc.",
    key: 0,
  },
  {
    name: "Bolu Ademola",
    img: "",
    role: "Data analyst",
    comment:
      "Lorem ipsum dolor sit amet consectetur. Duis pharetra at commodo urna sed eu consectetur eget adipiscing. Elit sed imperdiet diam mi viverra neque vivamus nunc.",
    key: 0,
  },
];
const Carousel: React.FC = () => {
  return (
    <>
      <h1 className="text-4 md:text-2 pt-5 md:pt-1 pb-8 md:pd-4">
        Testimonials from our members
      </h1>
      <Swiper
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
    </>
  );
};

export default Carousel;
