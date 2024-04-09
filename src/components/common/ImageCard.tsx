import Image, { type StaticImageData } from "next/image";

export interface CardProps {
  image: HTMLImageElement | string | StaticImageData;
  name: string;
  role: string;
  width?: string | number;
  height?: string | number;
}

const ImageCard: React.FC<CardProps> = ({
  image,
  name,
  role,
  width,
  height,
}) => {
  return (
    <div
      className={`relative rounded-lg overflow-hidden  w-[272px] md:w-[409px] h-[308px] md:h-[500px] mb-[16px] ${width} ${height} `}
    >
      <Image src={image} alt={name} objectFit="cover" className="h-full" />
      <div className="w-[100%] absolute bottom-0 rounded-lg">
        <div className=" bg-gradient-to-b from-transparent via-black-30/70 to-black-100 p-9">
          <h3 className="text-white  text-6 md:text-4">{name}</h3>
          <p className="text-yellow-100 text-8 md:text-6">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
