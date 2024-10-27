import Image from "next/image";
import globe from "../../assets/home/connectGlobe.png";
import Button from "../common/Button";

const Connect: React.FC = () => {
  return (
    <div className="pt-4 md:pt-1">
      <div className="flex flex-col md:flex-row text-start items-center justify-between gap-7">
        <div className="md:max-w-[50%] font-neue">
          <strong className="text-3 ">
            Connecting, Empowering and Impacting the next generation of{" "}
            <span className="text-purple-100"> tech innovators.</span>
          </strong>
          <p className="pt-8 text-4 text-gray-500">
            {" "}
            All tech and tech-adjacent professionals that need a space to learn,
            shine, and grow with other people just like them are welcome in the
            YPIT community. From tiny beginnings, our work has spread to over
            1000 individuals across 2 countries, over 6 events
          </p>
        </div>
        <Image
          src={globe}
          alt="globe"
          className="max-w-[300px] w-auto md:w-[405px] md:max-w-none"
        />
      </div>
      <div>
        <section className="flex flex-col md:flex-row items-center gap-8 pt-7">
          <div className="flex flex-row gap-8">
            <div className="flex flex-row items-center gap-9">
              <p className="text-4 md:text-3 font-extrabold text-gray-900">
                1000+
              </p>
              <p className="text-base text-gray-500 text-start">
                Active <br /> members
              </p>
            </div>
            <div className="flex flex-row items-center gap-9">
              <p className="text-4 md:text-3 font-extrabold text-gray-900">
                7+
              </p>
              <p className="text-base text-gray-500 text-start">
                Community <br /> Events
              </p>
            </div>
          </div>
          <a
            href="https://chat.whatsapp.com/JGIXg7zr6vx48YJAFv8mF2"
            target="_blank"
            data-testid="become_active_member_link"
          >
            <Button text="Become an active member" />
          </a>
        </section>
      </div>
    </div>
  );
};

export default Connect;
