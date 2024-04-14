import Daniel from "../../assets/aboutUs/daniel.jpg";
import Deborah from "../../assets/aboutUs/deborah.jpg";
import Dorcas from "../../assets/aboutUs/dorcas.jpg";
import Tobi from "../../assets/aboutUs/tobi.jpg";
import ImageCard from "../common/ImageCard";

const Speakers = () => {
  return (
    <main className="m-auto max-w-[320px] md:max-w-[96%]">
      <div className="">
        <h3 className="text-2xl md:text-5xl font-normal text-center md:text-left mb-[32px]">
          Meet Our Speakers
        </h3>
      </div>
      <div className="block lg:flex gap-[16px]">
        <div className="min-w-[50%] h-full">
          <ImageCard
            name="Dorcas Adewunmi"
            image={Dorcas}
            role="Specialist Project Ninja"
            width={"w-[100%] md:w-[100%] h-[100%] md:h-full"}
          />
        </div>
        <div className="lg:max-w-[50%] m-auto h-full">
          <div className="flex justify-center gap-[16px] items-center ">
            <ImageCard
              name="Dorcas Adewunmi"
              image={Deborah}
              role="Specialist Project Ninja"
              width={"min-w-[48%] lg:min-w-[50%] md:w-[50%] h-[196px] h-[100%]"}
            />
            <ImageCard
              name="Dorcas Adewunmi"
              image={Daniel}
              role="Specialist Project Ninja"
              width={"min-w-[48%] lg:min-w-[50%] lg:w-[50%] h-[196px] h-[100%]"}
            />
          </div>
          <div className="flex justify-center gap-[16px] items-center ">
            <ImageCard
              name="Dorcas Adewunmi"
              image={Tobi}
              role="Specialist Project Ninja"
              width={"min-w-[48%] lg:min-w-[50%] lg:w-[50%] h-[196px] h-[100%]"}
            />
            <ImageCard
              name="Dorcas Adewunmi"
              image={Dorcas}
              role="Specialist Project Ninja"
              width={"min-w-[48%] lg:min-w-[50%] lg:w-[50%] h-[196px] h-[100%]"}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Speakers;
