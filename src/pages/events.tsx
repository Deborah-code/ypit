import Partners from "@/components/common/Partners";
import Highlights from "@/components/events/Highlights";
import Series from "@/components/events/Series";
import Image from "next/image";
import { useState } from "react";
import Vector from "../assets/events/Vector.png";
import seriesA2 from "../assets/events/seriesA/2.jpg";
import seriesA3 from "../assets/events/seriesA/3.jpg";
import seriesA4 from "../assets/events/seriesA/4.jpg";
import seriesB2 from "../assets/events/seriesB/2.jpg";
import seriesB5 from "../assets/events/seriesB/3.jpg";
import seriesB3 from "../assets/events/seriesB/4.jpg";
import seriesC2 from "../assets/events/seriesC/2.jpg";
import seriesC4 from "../assets/events/seriesC/4.jpg";
import seriesC5 from "../assets/events/seriesC/5.jpg";
import location from "../assets/events/location.svg";
import founder1 from "../assets/events/founder1.svg";
import founder2 from "../assets/events/founder2.svg";
import founder3 from "../assets/events/founder3.svg";
import founder4 from "../assets/events/founder4.svg";
import founder5 from "../assets/events/founder5.svg";
import Button from "../components/common/Button";
import JoinCommunity from "../components/common/JoinCommunity";
import Modal from "../components/common/Modal";

const Events = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleMenuClick = () => {
    setShowModal(!showModal);
  };
  return (
    <main>
      <>
        <section className=" pt-5 md:pt-1">
          <h1 className="text-3 md:text-1 bg-gradient-to-r from-purple-100 via-purple-50 to-yellow-100 inline-block text-transparent bg-clip-text">
            Series D<span className="text-black-100">-</span>
          </h1>
          <h1 className="text-4 md:text-1 pb-8 md:inline">
            Our Biggest Tech Event Yet
          </h1>
          <p className="text-6 max-w-[100vw] m-auto  md:text-4 md:max-w-[790px] ">
            YPIT Series D was the latest installation of our community events,
            where we hosted young people in Nigeria&apos;s tech ecosystem to
            come and have a day of fun, learning, and networking on us.
          </p>
          <div className="pt-8">
            <div className="flex items-center justify-center gap-[32px]">
              <Button
                globeButton
                text="Join Our Community"
                onClick={handleMenuClick}
              />
              <a href="mailto:hello@someoneintech.com" target="_blank">
                <p className="text-purple-100 underline">Become a sponsor</p>
              </a>
            </div>
            {showModal && (
              <Modal
                isOpen={showModal}
                onClick={() => setShowModal(!showModal)}
                showCloseButton
              >
                <JoinCommunity />
              </Modal>
            )}{" "}
          </div>
          <Image src={Vector} alt="Series-D event" className="min-w-[100vw]" />
          <Image className="w-full" alt="Time and Location" src={location} />
          <div className="pt-16">
            <h3 className="pr-24 text-2xl md:flex md:pl-32 md:text-5xl font-normal ">
              Meet Our Speakers
            </h3>
          </div>
          <div className=" md:flex md:gap-[12px] md:px-32 ">
            <div>
              <Image
                className=" h-[848px] w-[340] md:w-[758px]"
                alt="founders image"
                src={founder1}
              />
            </div>
            <div className="   md:flex md:flex-col md:gap-[7px] md:pt-20">
              <div className=" md:flex md:gap-[10px]">
                <Image
                  className="w-[369px] h-[340px]"
                  src={founder2}
                  alt="speaker 2"
                />
                <Image
                  className="w-[369px] h-[340px]"
                  src={founder3}
                  alt="speaker 3"
                />
              </div>
              <div className="  md:flex md:gap-[10px]">
                <Image
                  className="w-[369px] h-[340px]"
                  src={founder4}
                  alt="speaker 4"
                />
                <Image
                  className="w-[369px] h-[340px]"
                  src={founder5}
                  alt="speaker 5"
                />
              </div>
            </div>
          </div>
        </section>
        <Highlights />
        <div className="flex flex-col md:flex-row justify-evenly gap-8 md:pt-1">
          <Series
            title="C"
            date="29th April 2023"
            img1={seriesC4}
            img2={seriesC2}
            img3={seriesC5}
            link="https://youngpeopleintech.pixieset.com/ypitseriesc/"
          />
          <Series
            title="B"
            date="27th Aug 2022"
            img2={seriesB3}
            img1={seriesB2}
            img3={seriesB5}
            link="https://youngpeopleintech.pixieset.com/ypitseriesb/"
          />
          <Series
            title="A"
            date="22nd January 2022"
            img3={seriesA2}
            img2={seriesA3}
            img1={seriesA4}
            link="https://youngpeopleintech.pixieset.com/ypitseriesa/"
          />
        </div>
        <Partners />
      </>
    </main>
  );
};

export default Events;
