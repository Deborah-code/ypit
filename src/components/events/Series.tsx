import React from 'react'
import Image from 'next/image'
import Button from '../common/Button'
import { StaticImageData } from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
// import { EffectCoverflow, Pagination, Navigation } from 'swiper';
import {Navigation} from 'swiper/modules';
import {EffectCoverflow} from 'swiper/modules';
import {Pagination} from 'swiper/modules';

import seriesA1 from "../../assets/events/seriesA/1.png"
import seriesB1 from "../../assets/events/seriesB/1.png"
import seriesC1 from "../../assets/events/seriesC/1.png"

interface Props {
  src?: HTMLImageElement | StaticImageData | string;
  title: String;
  date: String;
}
const Series: React.FC<Props> = ({src, title, date}) => {
  return (
    <div className="">
      <div className="mb-7  w-[max-content] mx-[auto] ">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <Image src={seriesA1} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={seriesB1} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={seriesC1} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={seriesA1} alt="slide_image" />
        </SwiperSlide>

      </Swiper >
      </div>
      <div className="">
        <h2 className="text-3 font-[500] mb-[8px] lg:mb-8">
          {`Series ${title}`}
        </h2>
        <p className='text-5 font-[400] text-black-50 mb-8'>
          {date}
        </p>
        <Button text="View Album" />
      </div>
    </div>
  )
}

export default Series