import Image, { StaticImageData } from "next/image";
import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import Daniel from "../../assets/aboutUs/Daniel.png";
import Dorcas from "../../assets/aboutUs/Dorcas.png";
import Tobi from "../../assets/aboutUs/Tobi.png";
import Deborah from "../../assets/aboutUs/deb.jpg";

import Biola from "../../assets/aboutUs/biola.png";

interface TeamProps {
  image: HTMLImageElement | string | StaticImageData;
  name: string;
  role: string;
}
const TeamCard: React.FC<TeamProps> = ({ image, name, role }) => {
  return (
    <div className="relatice">
      <Image
        src={image}
        alt={name}
        className="rounded-lg w-[272px] md:w-[409px] pb-8 h-[408px] md:h-[580px]"
      />
      <div className="absolute bottom-7 left-9 md:bottom-6 md:left-8">
        <p className="text-white">{name}</p>
        <strong className="text-yellow-100 text-6">{role}</strong>
      </div>
    </div>
  );
};

const members: TeamProps[] = [
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
  return (
    <>
      <h1 className="text-4 md:text-2 pt-5 md:pt-1 pb-8 md:pd-4">
        Meet our Amazing Team at{" "}
        <span className="bg-gradient-to-r from-purple-100 via-purple-100/55 to-yellow-100 inline-block text-transparent bg-clip-text">
          YPIT?
        </span>
      </h1>
      <Swiper
        slidesPerView={1.65}
        keyboard={true}
        spaceBetween={30}
        mousewheel={true}
        breakpoints={{
          440: { slidesPerView: 2.1 },
          640: { slidesPerView: 2.6 },
          768: { slidesPerView: 2.7 },
          940: { slidesPerView: 3 },
          1040: { slidesPerView: 3.2 },
        }}
        style={{
          overflow: "visible",
          justifyContent: "end",
          textAlign: "start",
          width: "100%",
        }}
      >
        {members.map((member) => (
          <SwiperSlide>
            <TeamCard
              name={member.name}
              image={member.image}
              role={member.role}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default TeamCarousel;
