import Image, { type StaticImageData } from "next/image";
import { type FC } from "react";

interface CardProps {
  image?: HTMLImageElement | string | StaticImageData;
  heading: string;
  body: string;
  color: string;
  headingColor?: string
  videoLink?: string
}

const Card: FC<CardProps> = ({ image, heading, body, color, headingColor, videoLink }) => {
  const divClass = `${color} rounded-3xl pt-9 px-9 md:pt-8 md:px-8 pb-8 w-full text-black text-start`;
  return (
    <div className={divClass}>
      {image && (
        <Image
          src={image}
          alt={heading}
          className="rounded-lg w-full pb-8 h-[235px]"
          objectFit="contain"
        />
      )}
      {
        videoLink && (
          <iframe style={{borderRadius: "16px", display: "block", marginInline: "auto"}} width="560" height="315" src={videoLink} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        )
      }
      <div>
        {heading && (
          <h2 className={`pb-8 font-medium tetx-5 md:text-3 ${headingColor ? headingColor : "text-purple-100"}`}>
            {heading}
          </h2>
        )}
        <p className="text-6 md:text-4">{body}</p>
      </div>
    </div>
  );
};

export default Card;
