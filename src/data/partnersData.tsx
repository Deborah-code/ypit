import { StaticImageData } from "next/image";
import { CSSProperties } from "react";
import bounce from "../assets/commons/bounce.png";
import greenCamp from "../assets/commons/greenCamp.png";
import paymentLogue from "../assets/commons/paymentLogue.png";
import techBabble from "../assets/commons/techBabble.png";
import zoropay from "../assets/commons/zoropay.png";
export interface Partners {
  name: string;
  image: HTMLImageElement | string | StaticImageData;
  className?: string;
  style?: CSSProperties;
}

export const PartnersData: Partners[] = [
  {
    name: "Zoropay",
    image: zoropay,
    className: "w-[59px] h-[13px] md:w-[160px] md:h-[37px]",
  },
  {
    name: "Greencamp",
    image: greenCamp,
    className: "w-[29px] h-[29px] md:w-[80px] md:h-[80px]",
  },
  {
    name: "PaymentLogue",
    image: paymentLogue,
    className: "w-[77px] h-[29px] md:w-[211px] md:h-[50px]",
  },
  {
    name: "TechBabble",
    image: techBabble,
    className: "w-[40px] h-[30px] md:w-[112px] md:h-[50px]",
  },
  {
    name: "Bounce",
    image: bounce,
    className: "w-[30px] h-[30px] md:w-[83px] md:h-[83px]",
  },
];
