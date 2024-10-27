import { PartnersData } from "@/data/partnersData";
import Image from "next/image";
import React from "react";
import SwiperCore from "swiper";
import { Autoplay, Parallax } from "swiper/modules";
import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";

const SwiperConfig: SwiperProps = {
  speed: 5000,
  autoplay: {
    delay: 5,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  loop: true,
  slidesPerView: "auto",
  watchSlidesProgress: true,
  spaceBetween: 2,
  grabCursor: true,
};

SwiperCore.use([Autoplay, Parallax]);

const Partners = () => {
  const partners = PartnersData;
  const swiperRef = React.useRef<SwiperCore>();

  const onInit = (Swiper: SwiperCore): void => {
    swiperRef.current = Swiper;
  };

  const handleMouseEnter = () => {
    if (swiperRef.current) swiperRef.current.autoplay.start();
  };
  const handleMouseLeave = () => {
    if (swiperRef.current) swiperRef.current.autoplay.stop();
  };

  return (
    <div>
      <h3 className="text-4 md:text-2 pt-5 md:pt-1 pb-8 md:pd-4">
        Some of our recent partners
      </h3>
      <div
        className="highlight-inner"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex flex-row justify-center items-center gap-[24px] md:gap-[56px] px-[18px]">
          {
            partners.map((partner, index) => (
            <Image
            src={partner.image}
            alt={partner.name}
            objectFit="contain"
            className={partner.className}
            style={{ maxHeight: "6rem", maxWidth: "10rem" }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
