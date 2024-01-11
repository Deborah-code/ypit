import { useWindowSize } from "@uidotdev/usehooks";
import Image from "next/image";
import bounce from "../../assets/commons/bounce.png";
import greenCamp from "../../assets/commons/greenCamp.png";
import paymentLogue from "../../assets/commons/paymentLogue.png";
import techBabble from "../../assets/commons/techBabble.png";
import zoropay from "../../assets/commons/zoropay.png";

const Partners = () => {
  const windowWidth = useWindowSize().width!;

  const changeValueByScreenSize = (
    desktopValue: number,
    mobileValue: number
  ) => {
    if (windowWidth > 767) {
      return desktopValue;
    } else return mobileValue;
  };
  return (
    <div>
      <h3 className="text-4 md:text-2 pt-5 md:pt-1 pb-8 md:pd-4">
        Our partners so far
      </h3>
      <div className="flex flex-row justify-center items-center gap-[24px] md:gap-[56px] px-[18px]">
        <Image
          src={zoropay}
          alt="logo"
          objectFit="contain"
          className="w-[59px] h-[13px] md:w-[160px] md:h-[37px]"
        />
        <Image
          src={greenCamp}
          alt="logo"
          objectFit="contain"
          className="w-[29px] h-[29px] md:w-[80px] md:h-[80px]"
        />
        <Image
          src={paymentLogue}
          alt="logo"
          objectFit="contain"
          className="w-[77px] h-[29px] md:w-[211px] md:h-[50px]"
        />
        <Image
          src={techBabble}
          alt="logo"
          objectFit="contain"
          className="w-[40px] h-[30px] md:w-[112px] md:h-[50px]"
        />
        <Image
          src={bounce}
          alt="logo"
          objectFit="contain"
          style={{
            width: changeValueByScreenSize(83, 30),
            height: changeValueByScreenSize(83, 30),
          }}
          className="w-[30px] h-[30px] md:w-[83px] md:h-[83px]"
        />
      </div>
    </div>
  );
};

export default Partners;
