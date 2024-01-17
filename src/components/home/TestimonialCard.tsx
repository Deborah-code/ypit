import Image, { type StaticImageData } from "next/image";
import person from "../../assets/home/person.png";

import Card from "../common/Card";

interface TestimonialCardProps {
  name: string;
  role: string;
  img: HTMLImageElement | string | StaticImageData;
  comment: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  role,
  comment,
}) => {
  return (
    <div className="w-[300px] md:w-[495px]">
      <Card body={comment} image="" heading="" color="bg-purple-20" />
      <div className="flex flex-row items-start gap-8 pt-9">
        <Image
          src={person}
          alt={name}
          className="w-[45px] md:w-[86px] h-[45px] md:h-[86px]"
        />
        <div className="flex flex-col items-start text-5 md:text-4 ">
          <p>{name}</p>
          <p>{role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
