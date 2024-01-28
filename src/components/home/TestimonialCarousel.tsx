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
    name: "Jemima",
    img: "",
    role: "Digital Marketer",
    comment:
      "When I attend this last one I came as an aspiring tech, I met a lot of people and now here I am a digital marketer all thanks to YPIT orientations.",
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
      "It was nice and very educative, i met a lot of bright thinking people.",
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
