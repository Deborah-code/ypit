import React from "react";
import Countdown from "./Countdown";
import Card from "../common/Card";

const UpcomingEvent = () => {
  return (
    <div className="p-8 my-[4rem] bg-purple-100 w-[100%] rounded-[1.5rem] flex flex-col gap-y-[2rem] gap-x-[1rem] md:grid  md:grid-cols-2 ">
      <div className="hidden md:grid md:grid-cols-2 gap-y-[2rem] gap-x-[1rem] col-span-2">
        <Card
          videoLink={
            "https://www.youtube.com/embed/xc2BbFEqcFo?si=GS-Nej3k9WgPAiDG"
          }
          heading="Series E"
          body="We're trying to take the awkwardness out of professional"
          color="bg-white"
          headingColor="text-purple-100"
        />
        <Countdown />
      </div>
    </div>
  );
};

export default UpcomingEvent;
