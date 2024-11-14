/* eslint-disable */

import { type StaticImageData } from "next/image";
import { type CSSProperties } from "react";
import acadaWorks from "../assets/commons/acada-logo.png";
import bounce from "../assets/commons/bounce.png";
import greenCamp from "../assets/commons/greenCamp.png";
import paymentLogue from "../assets/commons/paymentLogue.png";
import productDive from "../assets/commons/productDive.png";
import techBabble from "../assets/commons/techBabble.png";
import techCabal from "../assets/commons/techCabal.png";
import zoropay from "../assets/commons/zoropay.png";

export interface Partners {
  name: string;
  image: HTMLImageElement | string | StaticImageData;
  className: string;
  style?: CSSProperties;
  width?: number;
}

export const PartnersData = [
  {
    name: "Acada Works",
    image: acadaWorks,
    className: "w-[30px] h-[30px] max-h-[200px] md:w-[83px] md:h-[83px]",
  },
  {
    name: "Tech Cabal",
    image: techCabal,
    className: "w-[59px] h-[13px] md:w-[160px] md:h-[37px]",
    style: { width: "15rem" },
  },
  {
    name: "Product Dive",
    image: productDive,
    className: "w-[159px] h-[0px] md:w-[10] max-w-[200px] md:h-[37px]",
    style: { width: "15rem", height: "3rem" },
  },
  {
    name: "Zoropay",
    image: zoropay,
    className: "w-[59px] h-[13px] md:w-[160px] md:h-[37px]",
    style: { height: "3rem" },
  },
  {
    name: "Greencamp",
    image: greenCamp,
    className: "w-[29px] h-[29px] md:w-[80px] md:h-[80px]",
    style: { height: "3rem", width: "" },
  },
  {
    name: "PaymentLogue",
    image: paymentLogue,
    className: "w-[59px] h-[29px] md:w-[211px] md:h-[50px]",
    style: { maxWidth: 200 },
  },
  {
    name: "TechBabble",
    image: techBabble,
    className: "w-[40px] h-[30px] md:w-[112px] md:h-[50px]",
  },
  {
    name: "Bounce",
    image: bounce,
    className: "w-[30px] h-[30px] md:w-[63px] md:h-[63px] ",
  },
] as Partners[];
