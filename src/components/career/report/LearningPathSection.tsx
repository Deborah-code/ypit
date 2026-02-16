// components/career/report/LearningPathSection.tsx
import Image from "next/image";
import Pointer from "../../../assets/commons/report-pointer.svg";
import { type CareerRecommendation } from "../../../types/interfaces";

interface LearningPathSectionProps {
  learningPath: CareerRecommendation["learningPath"];
}

export default function LearningPathSection({
  learningPath,
}: LearningPathSectionProps) {
  return (
    <div className="bg-[#ECECEC] text-black-70 mt-[70px] mb-[50px] flex-col items-start justify-center gap-16 lg:mx-[25px] px-10 rounded-xl max-sm:mx-[8px] max-sm:px-[5px]">
      <div className="flex items-center justify-start mt-[40px] gap-[10px] ">
        <Image src={Pointer} alt="pointer" width={25}/>
        <h2 className="text-2xl mb-[10px] font-[700]  text-left">
          Recommended Learning Paths
        </h2>
      </div>

      <div className="flex flex-col items-start justify-center ml-[50px] max-sm:ml-0">
        {/* Immediate Steps */}
        <div className="mb-[30px]">
          <h2 className="flex items-center justify-start gap-[15px] text-xl font-[600]">
            Next Steps
            <span className="bg-gray-150/20 px-[10px] py-[5px] rounded-lg text-xs font-[400]">
              Immediate
            </span>
          </h2>
          <ul className="list-disc ml-[20px] mt-[10px]">
            {learningPath.immediateSteps.map((step, index) => (
              <li key={index} className="text-[16px] text-left leading-[30px]">
                {step}
              </li>
            ))}
          </ul>
        </div>

        {/* Resources */}
        {learningPath.recommendedResources.map((resource, index) => (
          <div key={index} className="text-start mb-[20px]">
            <h3 className="text-[16px] font-[600] mb-[10px]">
              {resource.type}
              <span className="bg-gray-150/20 px-[10px] py-[5px] rounded-lg text-xs font-[400] ml-[10px]">
                Resource
              </span>
            </h3>
            <ul className="list-disc ml-[20px]">
              {resource.links.map((link, linkIndex) => (
                <li
                  key={linkIndex}
                  className="text-[16px] text-left leading-[30px] text-wrap"
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Long Term Goals */}
        <div className="mb-[30px]">
          <h2 className="flex items-center gap-[15px] text-xl font-[600] mt-[20px]">
            Long Term Goals
            <span className="bg-gray-150/20 px-[10px] py-[5px] rounded-lg text-xs font-[400]">
              Future
            </span>
          </h2>
          <ul className="list-disc ml-[20px] mt-[10px]">
            {learningPath.longTermGoals.map((goal, index) => (
              <li key={index} className="text-[16px] text-left leading-[30px]">
                {goal}
              </li>
            ))}
          </ul>
        </div>

        {/* Additional Resources Note */}
        <div className="mt-[30px] mb-[40px]">
          <p className="text-start text-gray-70 text-[16px] mb-[3px] italic">
            Looking for more learning resources?
          </p>
          <p className="text-left">
            Explore additional courses on Coursera, edX, and
            <br /> other leading platforms
          </p>
        </div>
      </div>
    </div>
  );
}
