import Image from "next/image";
import React from "react";
import upcomingEvent from "../../assets/home/seriesE.jpg";
import Countdown from "./Countdown";
import Card from "../common/Card";

const UpcomingEvent = () => {
  return (
    <div className="p-8 my-[4rem] bg-[#FA8A1A] w-[100%] rounded-[1.5rem] flex flex-col gap-y-[2rem] gap-x-[1rem] md:grid  md:grid-cols-2 ">
      <Image
        className="rounded-[1.5rem] w-[100%] "
        src={upcomingEvent}
        alt="Upcoming Event Picture"
        style={{}}
      />
      <Countdown />
      <div className="hidden md:grid md:grid-cols-2 gap-y-[2rem] gap-x-[1rem] col-span-2">
        <Card
          videoLink={
            "https://www.youtube.com/embed/bc8fvW2AZdY?si=c94fqI6-KL5wGykT"
          }
          heading="Series C"
          body="We're trying to take the awkwardness out of professional"
          color="bg-[#FFF4E9]"
          headingColor="text-[#fa8a1a]"
        />
        <Card
          videoLink={
            "https://www.youtube.com/embed/-zieIimbY3Y?si=PlV7PciAQD8iy7GM"
          }
          heading="Series D"
          body="We're trying to take the awkwardness out of professional"
          color="bg-[#FFF4E9]"
          headingColor="text-[#fa8a1a]"
        />
      </div>
    </div>
  );
};

export default UpcomingEvent;
