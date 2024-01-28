import Image from "next/image";
import heroImage from "../../assets/aboutUs/heroImage.png";
import heroStack from "../../assets/aboutUs/heroStack.png";

import Button from "../common/Button";

const Hero: React.FC = () => {
  return (
    <main className="pt-4 md:pt-1">
      <div className="flex flex-col md:flex-row text-start items-center justify-between gap-7">
        <section className="md:max-w-[50%]">
          <strong className="text-3">
            We&apos;re Here to Help You Make Your Mark on the
            <span className="text-purple-100"> Tech Industry.</span>
          </strong>
          <p className="pt-8 text-4 text-gray-500">
            {" "}
            Welcome to a place where innovation knows no bounds, and your tech
            dreams are fueled with endless possibilities. We&apos;re here to
            help you make your indelible mark on the tech industry, and we
            couldn&apos;t be more excited about your journey ahead.
          </p>
          <a
            href="https://chat.whatsapp.com/JGIXg7zr6vx48YJAFv8mF2"
            target="_blank"
            className="flex justify-start pt-7"
          >
            <Button text="Become an active member" />
          </a>
        </section>
        <Image src={heroStack} alt="globe" />
      </div>
      <section className="pt-4 md:pt-1 ">
        <Image src={heroImage} alt="globe" />
        <div className="flex flex-row pt-7 justify-center gap-1">
          <div className="flex flex-row items-center gap-9 ">
            <p className="text-4 md:text-3 text-gray-900">1000+</p>
            <p className="text-base text-gray-500 text-start">
              Active <br /> members
            </p>
          </div>
          <div className="flex flex-row items-center gap-9 bg-gradient-radial  ">
            <p className="text-4 md:text-3 text-gray-900">5+</p>
            <p className="text-base text-gray-500 text-start">
              Community <br /> Events
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
