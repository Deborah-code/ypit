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
  const [hover, onHover] = React.useState<boolean>(false);

  const onInit = (Swiper: SwiperCore): void => {
    swiperRef.current = Swiper;
  };

  const handleMouseEnter = () => {
    onHover(true);
    if (swiperRef.current) swiperRef.current.autoplay.start();
  };
  const handleMouseLeave = () => {
    onHover(false);
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
        <Swiper {...SwiperConfig} onInit={onInit}>
          {partners.map((partner, index) => (
            <SwiperSlide style={{ marginLeft: "2rem" }}>
              <Image
                key={index}
                src={partner.image}
                alt={partner.name}
                objectFit="contain"
                className={partner.className}
                style={{ maxHeight: "5rem", maxWidth: "8rem" }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Partners;
