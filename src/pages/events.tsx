import Partners from "@/components/common/Partners";
import Highlights from "@/components/events/Highlights";
import Series from "@/components/events/Series";
import { useState } from "react";
// import seriesC2 from '../assets/events/seriesC/2.jpg';
// import seriesC4 from '../assets/events/seriesC/4.jpg';
// import seriesC5 from '../assets/events/seriesC/5.jpg';
import seriesD1 from "../assets/events/seriesD/1.jpeg";
import seriesD2 from "../assets/events/seriesD/2.jpeg";
import seriesD3 from "../assets/events/seriesD/3.jpeg";
import seriesE1 from "../assets/events/seriesE/1.jpeg";
import seriesE2 from "../assets/events/seriesE/2.jpeg";
import seriesE3 from "../assets/events/seriesE/3.jpeg";
import seriesF1 from "../assets/events/seriesF/1.jpg";
import seriesF2 from "../assets/events/seriesF/2.jpg";
import seriesF3 from "../assets/events/seriesF/3.jpg";

const Events = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <main>
      <>
        <section className=" pt-5 md:pt-1">
          <div className="max-sm:w-[29%] max-sm:text-center max-sm:mx-auto">
            <h1 className="text-3 md:text-1 bg-gradient-to-r from-purple-100 via-purple-50 to-yellow-100 inline-block text-transparent bg-clip-text   ">
              Our first event in London!
            </h1>
          </div>

          <h1 className="text-4 md:text-1 pb-8 md:inline"></h1>
          <p className="text-6 max-w-[100vw] m-auto  md:text-4 md:max-w-[790px] ">
            The last installation of YPIT was in the Big Smoke, where we hosted
            over 30 young people in London&apos;s tech ecosystem to come and
            have a day of fun, learning, and networking on us.
          </p>

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
            title="F"
            date="29th September 2024"
            img3={seriesF3}
            img2={seriesF2}
            img1={seriesF1}
            link="https://youngpeopleintech.pixieset.com/ypitseriesf/"
          />
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
          {/* <Series
            title='C'
            date='29th April 2023'
            img1={seriesC4}
            img2={seriesC2}
            img3={seriesC5}
            link='https://youngpeopleintech.pixieset.com/ypitseriesc/'
          /> */}
        </div>
        <Partners />
      </>
    </main>
  );
};

export default Events;
