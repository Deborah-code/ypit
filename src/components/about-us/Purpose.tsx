import Image, { StaticImageData } from "next/image";
import missionIcon from "../../assets/aboutUs/missionIcon.png";
import missionImage from "../../assets/aboutUs/missionImage.png";
import visionImage from "../../assets/aboutUs/visionImage.png";
import visionIcon from "../../assets/aboutUs/visoionIcon.png";

interface CardDetails {
  icon: HTMLImageElement | string | StaticImageData;
  heading: string;
  text: string;
  image: HTMLImageElement | string | StaticImageData;
  flexDirection: "row" | "row-reverse" | "col" | "col-reverse" | undefined;
}

const cardDetails: CardDetails[] = [
  {
    icon: missionIcon,
    heading: "Mission",
    text: `The community's mission is to foster connections among young individuals in the field of technology across Africa 
        through the utilisation of physical events, virtual events, and targeted communication.`,
    image: missionImage,
    flexDirection: "row",
  },
  {
    icon: visionIcon,
    heading: "Vision",
    text: `The community envisions becoming a thriving environment that fosters growth and development through networking for aspiring 
        and fledgling technologically interested individuals across Africa`,
    image: visionImage,
    flexDirection: "row-reverse",
  },
];

const Purpose = () => {
  return (
    <section className="flex flex-col gap-4 md:gap-2 pb-4 justify-between mx-auto  pt-3 md:pt-1">
      {cardDetails.map((details, id) => {
        return (
          <div
            className={`md:flex flex-row justify-between items-center text-left gap-4 md:gap-2`}
            key={id}
          >
            <div>
              <Image
                src={details.icon}
                alt="icon"
                className="pb-6 md:pb-4 h-full w-[60px] md:w-[104px]"
              />
              <div className="max-w-[100%]">
                <h2 className="font-bold text-2xl pb-9">{details.heading}</h2>
                <p className="text-lg text-gray-600">{details.text}</p>
              </div>
            </div>
            <div className="image_container p-8 rounded-2xl border border-purple-50 md:w-[50%] min-w-[50%] mt-7">
              <Image src={details.image} alt="Hero Image" />
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Purpose;
