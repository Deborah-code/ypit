import Partners from "@/components/common/Partners";
import Banner from "@/components/events/Banner";
import Highlights from "@/components/events/Highlights";
import Series from "@/components/events/Series";
import Image from "next/image";
import { useState } from "react";
import seriesB2 from "../assets/events/seriesB/2.jpg";
import seriesB5 from "../assets/events/seriesB/3.jpg";
import seriesB3 from "../assets/events/seriesB/4.jpg";
import seriesC2 from "../assets/events/seriesC/2.jpg";
import seriesC4 from "../assets/events/seriesC/4.jpg";
import seriesC5 from "../assets/events/seriesC/5.jpg";
import seriesD1 from "../assets/events/seriesD/1.jpeg";
import seriesD2 from "../assets/events/seriesD/2.jpeg";
import seriesD3 from "../assets/events/seriesD/3.jpeg";
import seriesE from "../assets/events/seriesE.png";
import Button from "../components/common/Button";
import JoinCommunity from "../components/common/JoinCommunity";
import Modal from "../components/common/Modal";

const Events = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <main>
      <>
        <section className=" pt-5 md:pt-1">
          <h1 className="text-3 md:text-1 bg-gradient-to-r from-purple-100 via-purple-50 to-yellow-100 inline-block text-transparent bg-clip-text">
            Series E<span className="text-black-100">-</span>
          </h1>
          <h1 className="text-4 md:text-1 pb-8 md:inline">
            Our first event in 2024
          </h1>
          <p className="text-6 max-w-[100vw] m-auto  md:text-4 md:max-w-[790px] ">
            YPIT&apos;s Series E event is the latest installation of our
            community events, where we&apos;ll host young people in
            Nigeria&apos;s tech ecosystem to come and have a day of fun,
            learning, and networking on us. It&apos;s also the first one
            we&apos;ll be having on the mainland
          </p>
          <div className="pt-8">
            <div className="flex items-center justify-center gap-[32px]">
              <a href="https://bit.ly/YPITseriesE" target="_blank">
                <Button
                  text="Save a spot now!"
                  className="text-black-100 text-9 md:text-6"
                  borderColor="border-orange-100 bg-orange-20"
                  textColor="text-black-100"
                  bgColor="bg-orange-20"
                />
              </a>
              <a href="mailto:hello@someoneintech.com" target="_blank">
                <p className="text-orange-100 underline">Become a sponsor</p>
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
            )}
          </div>
          <section className="max-w-[34%] md:max-w-[100%] m-auto h-full">
            <Image
              src={seriesE}
              alt="Series-E Flyer"
              className="max-w-[85%] mx-auto mt-[32px] md:mt-[64px] h-full w-[100%]"
              objectFit="contain"
            />
            <Banner />
          </section>
          {/* <Speakers /> */}
        </section>
        <Highlights />
        <div className="flex flex-col md:flex-row justify-evenly gap-8 md:pt-1">
          <Series
            title="D"
            date="2nd December 2023"
            img3={seriesD3}
            img2={seriesD1}
            img1={seriesD2}
            link="https://youngpeopleintech.pixieset.com/ypitseriesd/"
          />
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
        </div>
        <Partners />
      </>
    </main>
  );
};

export default Events;
