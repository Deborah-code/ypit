import Image, { type StaticImageData } from "next/image";
import Problem from "../../../assets/commons/Problem solving-amico 1.svg";
import Pointer from "../../assets/commons/report-pointer.svg";
import { type CareerRecommendation } from "../../types/interfaces";
import { BulletPoint } from "./Sections";

interface SummarySectionProps {
  summary: CareerRecommendation["summary"];
}

export function SummarySection({ summary }: SummarySectionProps) {
  return (
    <div className="bg-[#ECECEC] text-black-70 pb-[15px] flex items-center justify-center gap-16 mx-[25px] max-sm:mx-[8px] max-sm:flex-col max-sm:gap-6 rounded-xl">
      <div className="flex flex-col items-start justify-start mx-5 max-sm:mx-[10px]">
        <div className="flex items-center justify-center mt-[20px] gap-[20px]">
          <Image src={Pointer} alt="pointer" />
          <h2 className="text-2xl mb-[10px]">Summary</h2>
        </div>

        <div className="flex flex-col gap-[15px] ml-[3.2rem] max-sm:ml-0">
          <p className="text-left text-[16px]">
            Based on your assessment results, here&apos;s what we found:
          </p>

          <BulletPoint
            isCustomBullet={true}
            text={
              <>
                <span className="font-semibold">Primary strengths: </span>
                {summary.primaryStrengths.join(", ")}
              </>
            }
          />

          <BulletPoint
            isCustomBullet={true}
            text={
              <>
                <span className="font-semibold">Career direction: </span>
                {summary.careerDirection}
              </>
            }
          />

          <BulletPoint
            isCustomBullet={true}
            text={
              <>
                <span className="font-semibold">Development Areas: </span>
                {summary.developmentAreas.join(", ")}
              </>
            }
          />
        </div>
      </div>
      <Image
        src={Problem as StaticImageData}
        alt="Hero Image"
        className="mr-4 max-sm:mr-0"
      />
    </div>
  );
}
