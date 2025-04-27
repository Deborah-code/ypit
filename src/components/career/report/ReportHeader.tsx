import {
  type CareerRecommendation,
  type UserProfile,
} from "@/types/interfaces";
import dynamic from "next/dynamic";

const DynamicPDFDownloadButton = dynamic(() => import("./DynamicPDFDownload"), {
  ssr: false,
  loading: () => (
    <button
      className="flex items-center justify-center py-[10px] px-[15px] bg-white text-purple-100 rounded-xl font-semibold text-sm opacity-70"
      disabled
    >
      Loading PDF Generator...
    </button>
  ),
});

interface ReportHeaderProps {
  recommendation: CareerRecommendation;
  userProfile: UserProfile;
}

export default function ReportHeader({
  recommendation,
  userProfile,
}: ReportHeaderProps) {
  return (
    <div className="flex items-center justify-between px-10 mb-[15px] max-sm:flex-col max-sm:px-[10px] max-sm:items-start max-sm:justify-start">
      <div>
        <h2 className="text-left text-white text-4xl mb-[5px] font-semibold max-sm:pt-[12px]">
          Your career match report is ready
        </h2>
        <p className="text-left text-white text-[16px] font-light ml-[10px] max-sm:ml-0 max-sm:mb-[10px]">
          Based on your interests, skills and personality traits
        </p>
      </div>
      <div className="flex items-center max-sm:ml-[10px] max-sm:mb-[15px]">
        <DynamicPDFDownloadButton
          recommendation={recommendation}
          userProfile={userProfile}
        />
      </div>
    </div>
  );
}
