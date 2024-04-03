import { PartnersData } from "@/data/partnersData";
import Image from "next/image";

const Partners = () => {
  const partners = PartnersData;

  return (
    <div>
      <h3 className="text-4 md:text-2 pt-5 md:pt-1 pb-8 md:pd-4">
        Some of our recent partners
      </h3>
      <div className="flex flex-row justify-center items-center gap-[24px] lg:gap-[56px] px-[18px]">
        {partners.map((partner, index) => (
          <Image
            key={index}
            src={partner.image}
            alt={partner.name}
            objectFit="contain"
            className={partner.className}
          />
        ))}
      </div>
    </div>
  );
};

export default Partners;
