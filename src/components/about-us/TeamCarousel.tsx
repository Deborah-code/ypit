import React, { useState } from "react";
import "swiper/css";
import { Mousewheel } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from 'swiper';
import Daniel from "../../assets/aboutUs/daniel.jpg";
import Deborah from "../../assets/aboutUs/deborah.jpg";
import Biola from "../../assets/aboutUs/diji.jpg";
import Dorcas from "../../assets/aboutUs/dorcas.jpg";
import Tobi from "../../assets/aboutUs/tobi.jpg";
import ImageCard, { type CardProps } from "../common/ImageCard";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const members: CardProps[] = [
  {
    name: "Tobi Aromire",
    role: "Captain of the Ship",
    image: Tobi,
  },
  {
    name: "Deborah Adewunmi",
    image: Deborah,
    role: "Leader of the Tech  pack",
  },
  {
    name: "Abiola Oladiji",
    image: Biola,
    role: "Brand Alchemist",
  },
  {
    name: "Dorcas Adewunmi",
    image: Dorcas,
    role: "Specialist Project Ninja",
  },
  {
    name: "Daniel Adewunmi",
    image: Daniel,
    role: "Director of Wordplay and Punnery",
  },
];

const TeamCarousel: React.FC = () => {
  //swiper instance to enable swiping with buttons
  const [swiper, setSwiper] = useState<SwiperType | null>(null);

  //state index that monitors the current slide
  const [activeIndex, setActiveIndex] = useState(0);

  const handleMovingToNextSlide = () => {
    if (swiper && activeIndex < members.length - 1) {
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
      <h1 className="text-2xl md:text-4xl pt-5 md:pt-1 pb-8 md:pb-4 text-center">
        Meet our Amazing Team at{" "}
        <span className="bg-gradient-to-r from-purple-100 via-purple-100/55 to-yellow-100 inline-block text-transparent bg-clip-text">
          YPIT
        </span>
      </h1>
      <div className="w-full overflow-hidden">
        <Swiper
          onSwiper={setSwiper}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          slidesPerView={1.65}
          keyboard={true}
          spaceBetween={20}
          mousewheel={{
            forceToAxis: true,
            releaseOnEdges: true,
          }}
          modules={[Mousewheel]}
          breakpoints={{
            440: { slidesPerView: 2.1, spaceBetween: 30 },
            640: { slidesPerView: 2.6, spaceBetween: 40 },
            768: { slidesPerView: 2.7, spaceBetween: 50 },
            940: { slidesPerView: 3, spaceBetween: 60 },
            1040: { slidesPerView: 3.2, spaceBetween: 70 },
          }}
          style={{
            width: "100%",
            padding: "20px 0",
          }}
        >
          {members.map((member, index) => (
            <SwiperSlide key={index}>
              <ImageCard
                name={member.name}
                image={member.image}
                role={member.role}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="absolute top-[60%] left-0 right-0 z-10 flex justify-between px-7 transform -translate-y-1/2">
        <button
          className="bg-white bg-opacity-50 hover:bg-opacity-75 text-black rounded-full shadow flex items-center justify-center w-5 h-5 text-sm"
          onClick={handleMovingToPrevSlide}
          disabled={activeIndex === 0}
        >
          <IoIosArrowBack size={24}/>
        </button>
        <button
          className="bg-white bg-opacity-50 hover:bg-opacity-75 text-black rounded-full shadow flex items-center justify-center w-5 h-5 text-sm"
          onClick={handleMovingToNextSlide}
          disabled={activeIndex === members.length - 1}
        >
          <IoIosArrowForward size={24}/>
        </button>
      </div>
    </div>
  );
};

export default TeamCarousel;
