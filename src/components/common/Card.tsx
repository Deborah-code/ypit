import Image, {type StaticImageData} from "next/image";
import {type FC} from "react";

interface CardProps {
  image?: HTMLImageElement | string | StaticImageData;
  heading: string;
  body: string;
  color: string;
  headingColor?: string;
  videoLink?: string;
}

const Card: FC<CardProps> = ({
  image,
  heading,
  body,
  color,
  headingColor,
  videoLink,
}) => {
  const divClass = `${color} rounded-3xl pt-9 px-9 md:pt-8 md:px-8 pb-8 w-full text-black text-start`;
  return (
    <div className={divClass} data-testid="card_component">
      {image && (
        <Image
          src={image}
          alt={heading}
          className="rounded-lg w-full object-cover object-center mb-8 h-[235px]"
        />
      )}
      {videoLink && (
        <iframe
          style={{
            borderRadius: "16px",
            display: "block",
            marginInline: "auto",
          }}
          src={videoLink}
          title="YouTube video player"
          className="w-full md:h-[315px] md:w-[560px]"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      )}
      <div>
        {heading && (
          <h2
            className={`pb-8 pt-2.5 md:pt-0 font-medium text-5 md:text-3 ${
              headingColor ? headingColor : "text-purple-100"
            }`}
          >
            {heading}
          </h2>
        )}
        <p className="text-6 md:text-4">{body}</p>
      </div>
    </div>
  );
};

export default Card;
