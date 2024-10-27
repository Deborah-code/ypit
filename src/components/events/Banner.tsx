import { Icon } from "@iconify/react";
import { type FC } from "react";

interface TextandIconProps {
  text: string;
  icon: string;
}

const TextandIcon: FC<TextandIconProps> = (props) => {
  return (
    <div className="flex gap-[8px] items-center whitespace-nowrap">
      <Icon icon={props.icon} color="#FA8A1A" width="24" height="24" />
      <p className="text-purple-100">{props.text}</p>
    </div>
  );
};

const Banner = () => {
  return (
    <div className="bg-purple-20 flex gap-[16px] md:gap-[24px] p-[8px] md:p-[16px] my-[32px] md:my-[64px] justify-center">
      <TextandIcon text="2:00 PM" icon="formkit:time" />
      <TextandIcon text="SURULERE, LAGOS" icon="carbon:location" />
      <TextandIcon text="27TH APRIL, 2024" icon="formkit:date" />
      <TextandIcon text="2:00 PM" icon="formkit:time" />
      <TextandIcon text="SURULERE, LAGOS" icon="carbon:location" />
      <TextandIcon text="27TH APRIL, 2024" icon="formkit:date" />
      <TextandIcon text="2:00 PM" icon="formkit:time" />
      <TextandIcon text="SURULERE, LAGOS" icon="carbon:location" />
      <TextandIcon text="27TH APRIL, 2024" icon="formkit:date" />
    </div>
  );
};

export default Banner;
