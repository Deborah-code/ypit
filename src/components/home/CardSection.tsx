import React from "react";
import network from "../../assets/home/card1.png";
import connect from "../../assets/home/card2.png";
import grow from "../../assets/home/card3.png";
import work from "../../assets/home/card4.png";
import Card from "../common/Card";

const CardSection: React.FC = () => {
  return (
    <div className="pt-1 flex flex-col items-center ">
      <p className="text-4xl font-bold pb-4">
        Why join{" "}
        <span className="bg-gradient-to-r from-purple-100 via-purple-50 to-yellow-100 inline-block text-transparent bg-clip-text">
          YPIT?
        </span>
      </p>
      <div className="flex flex-wrap justify-center gap-8">
        <div className="w-full md:w-[34.5%]">
          <Card
            heading="Network"
            body="We're trying to take the awkwardness out of professional networking. YPIT's Series Events are our way of having fun with the community"
            image={network}
            color="purple-20"
          />
        </div>
        <div className="w-full md:w-[61.5%]">
          <Card
            heading="Connect and Learn"
            body="Join YPIT community members at one of our in-person events or online talks and webinars. Whether we're sharing insights on the tech ecosystem or just hanging out with similar minds in the same space, you'll be sure to find meaningful connections and learning opportunities at YPIT"
            image={connect}
            color="purple-20"
          />
        </div>
        <div className="w-full md:w-[50%]">
          <Card
            heading="Grow"
            body="YPIT's mentorship programs, monthly newsletters, and The Innovation Hub help us offer you a lot whether you're looking to expand your skillsets, industry-specific knowledge, or just become a better professional."
            image={grow}
            color="purple-20"
          />
        </div>
        <div className="w-full md:w-[45%]">
          <Card
            heading="Do work that has Impact"
            body="Join the YPIT Innovation Hub to get your hands dirty helping to run the community and serve it's growing members. The work we do serves real people and is useful for more than just resume building."
            image={work}
            color="purple-20"
          />
        </div>
      </div>
    </div>
  );
};

export default CardSection;
