import Image, { type StaticImageData } from "next/image";
import React from "react";
import "swiper/css";
import { Mousewheel } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Daniel from "../../assets/aboutUs/daniel.jpg";
import Debbie from "../../assets/aboutUs/debbie.jpg";
import Dorcas from "../../assets/aboutUs/dorcas.jpg";
import Tobi from "../../assets/aboutUs/tobi.jpg";

import Biola from "../../assets/aboutUs/diji.jpg";

interface TeamProps {
  image: HTMLImageElement | string | StaticImageData;
  name: string;
  role: string;
}
const TeamCard: React.FC<TeamProps> = ({ image, name, role }) => {
  return (
    <div className="relative rounded-lg overflow-hidden">
      <Image
        src={image}
        alt={name}
        className="rounded-lg w-[272px] md:w-[409px]  h-[308px] md:h-[560px]"
      />
      <div className="w-[100%] absolute bottom-0 rounded-lg">
        <div className=" bg-gradient-to-b from-transparent via-black-30/70 to-black-100 p-9">
          <h3 className="text-white text-4">{name}</h3>
          <p className="text-yellow-100 text-6">{role}</p>
        </div>
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
    image: Debbie,
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
        mousewheel={{
          forceToAxis: true,
          releaseOnEdges: true,
        }}
        modules={[Mousewheel]}
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
        {members.map((member, index) => (
          <SwiperSlide key={index}>
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
