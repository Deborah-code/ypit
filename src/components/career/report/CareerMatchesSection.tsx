// components/career/report/CareerMatchesSection.tsx
import Image, { type StaticImageData } from "next/image";
import Pointer from "../../../assets/commons/report-pointer.svg";
import type { CareerRecommendation } from "../../../types/interfaces";

interface CareerMatchesSectionProps {
  careerMatches: CareerRecommendation["careerMatches"];
}

export default function CareerMatchesSection({
  careerMatches,
}: CareerMatchesSectionProps) {
  return (
    <div className="bg-[#ECECEC] text-black-70 mt-[70px] flex-col items-start justify-start gap-16 lg:mx-[25px] px-10 rounded-xl max-sm:mx-[8px] max-sm:px-[5px]">
      <div className="flex items-center  justify-start mt-[40px] gap-[10px]">
        <Image src={Pointer as StaticImageData} alt="pointer" width={25} />
        <h2 className="text-2xl mb-[10px] font-[700] ">Top career matches</h2>
      </div>

      <div className="flex flex-col items-start justify-start ml-[56px] max-sm:ml-[10px]">
        {careerMatches.map((match, index) => (
          <div key={index} className="mb-[30px]">
            <h2 className="flex items-center justify-between py-[8px] gap-[15px] text-xl font-[600]">
              {match.role}
              <span className="bg-gray-150/20 px-[10px] py-[5px] rounded-lg text-xs font-[400]">
                {match.matchScore}% match
              </span>
            </h2>
            <p className="text-[17px] text-left leading-[30px] mb-[10px]">
              {match.description}
            </p>
            <p className="text-gray-70 text-[14px] mb-[15px] text-start">
              Top Skills required
            </p>
            <ul className="flex items-center justify-start gap-[10px] mb-[20px] flex-wrap">
              {match.requiredSkills.map((skill, skillIndex) => (
                <li
                  key={skillIndex}
                  className="bg-gray-75 px-[15px] rounded-lg py-[5px] text-xs text-black-70"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
