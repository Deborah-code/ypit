import Partners from "@/components/common/Partners";
import Highlights from "@/components/events/Highlights";
import Series from "@/components/events/Series";
import { useState } from "react";
import seriesC2 from "../assets/events/seriesC/2.jpg";
import seriesC4 from "../assets/events/seriesC/4.jpg";
import seriesC5 from "../assets/events/seriesC/5.jpg";
import seriesD1 from "../assets/events/seriesD/1.jpeg";
import seriesD2 from "../assets/events/seriesD/2.jpeg";
import seriesD3 from "../assets/events/seriesD/3.jpeg";
import seriesE1 from "../assets/events/seriesE/1.jpeg";
import seriesE2 from "../assets/events/seriesE/2.jpeg";
import seriesE3 from "../assets/events/seriesE/3.jpeg";
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
            Series F <span className="text-black-100">-</span>
          </h1>
          <h1 className="text-4 md:text-1 pb-8 md:inline">
            Our next event in 2024
          </h1>
          <p className="text-6 max-w-[100vw] m-auto  md:text-4 md:max-w-[790px] ">
            YPIT&apos;s Series F event is the next installation of our community
            events, where we&apos;ll host young people in Nigeria&apos;s tech
            ecosystem to come and have a day of fun, learning, and networking on
            us. It&apos;s coming soon! sign up to get updates
          </p>
          <div className="pt-8">
            <div className="flex items-center justify-center gap-[32px]">
              <a href="https://bit.ly/YPITseriesE" target="_blank">
                <Button
                  text="Save a spot now!"
                  className="text-black-100 text-9 md:text-6"
                  borderColor="border-purple-100 bg-purple-20"
                  textColor="text-black-100"
                  bgColor="bg-orange-20"
                />
              </a>
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
            )}
          </div>
          <section className="max-w-[34%] md:max-w-[100%] m-auto h-full">
            {/* <Image
              src={seriesE}
              alt="Series-E Flyer"
              className="max-w-[85%] mx-auto mt-[32px] md:mt-[64px] h-full w-[100%]"
              objectFit="contain"
            /> */}
            {/*<Banner />*/}
          </section>
          {/* <Speakers /> */}
        </section>
        <Highlights />
        <div className="flex flex-col md:flex-row justify-evenly gap-8 md:pt-1">
          <Series
            title="E"
            date="27th April 2024"
            img3={seriesE3}
            img2={seriesE2}
            img1={seriesE1}
            link="https://youngpeopleintech.pixieset.com/ypitseriese/"
          />
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
        </div>
        <Partners />
      </>
    </main>
  );
};

export default Events;
