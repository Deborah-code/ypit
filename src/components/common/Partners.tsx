import { PartnersData } from "@/data/partnersData";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const Partners = () => {
  const partners = PartnersData;

  return (
    <div>
      <h3 className="text-4 md:text-2 pt-5 md:pt-1 pb-8 md:pd-4">
        Some of our recent partners
      </h3>
      <div className="highlight-inner overflow-x-hidden">
        <Marquee pauseOnHover loop={0} speed={80}>
          {partners.map((partner, index) => (
            <Image
              key={index}
              src={partner.image}
              alt={partner.name}
              objectFit="contain"
              className={partner.className}
              style={{
                maxHeight: 150,
                margin: 15,
                ...partner.style,
              }}
            />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Partners;
