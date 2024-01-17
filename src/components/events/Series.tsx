import Image, { StaticImageData } from "next/image";
import React from "react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Button from "../common/Button";

interface Props {
  title: String;
  date: String;
  link: String;
  img1: HTMLImageElement | StaticImageData | string;
  img2: HTMLImageElement | StaticImageData | string;
  img3: HTMLImageElement | StaticImageData | string;
}
const Series: React.FC<Props> = ({ img1, img2, img3, title, date, link }) => {
  return (
    <div className="">
      <div className="mb-7  w-[max-content] mx-[auto] ">
        <Swiper
          effect={"cards"}
          grabCursor={true}
          style={{ width: 300, height: "auto" }}
          loop={true}
          modules={[EffectCards]}
          cardsEffect={{}}
        >
          <>
            <SwiperSlide>
              <Image
                src={img1}
                alt="slide_image"
                className="rounded-[16px] h-[400px]"
                objectFit="contain"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={img2}
                alt="slide_image"
                className="rounded-[16px] h-[400px]"
                objectFit="contain"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={img3}
                alt="slide_image"
                className="rounded-[16px] h-[400px]"
                objectFit="contain"
              />
            </SwiperSlide>
          </>
        </Swiper>
      </div>
      <div className="">
        <h2 className="text-3 font-[500] mb-[8px] lg:mb-8">
          {`SERIES ${title}`}
        </h2>
        <p className="text-5 font-[400] text-black-50 mb-8">{date}</p>
        <a href={`${link}`} target="_blank">
          <Button text="View Album" />
        </a>
      </div>
    </div>
  );
};

export default Series;
