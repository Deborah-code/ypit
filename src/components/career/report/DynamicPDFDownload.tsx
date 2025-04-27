import dynamic from "next/dynamic";
import type { CareerRecommendation, UserProfile } from "@/types/interfaces";

interface DownloadButtonProps {
  recommendation: CareerRecommendation;
  userProfile: UserProfile;
}

// loading component to show while the PDF component loads
const PDFLoadingButton = () => (
  <button
    className="flex items-center justify-center py-[10px] px-[15px] bg-white text-purple-100 rounded-xl font-semibold text-sm hover:bg-purple-20 transition-colors opacity-70"
    disabled
  >
    Loading PDF Generator...
  </button>
);

// Dynamically import the PDF component to avoid SSR issues
const DynamicPDFDownloadButton = dynamic(
  () => import("./DownloadReportButton"),
  {
    ssr: false,
    loading: () => <PDFLoadingButton />,
  }
);

// a wrapper component that uses the dynamic import
const PDFDownloadButton: React.FC<DownloadButtonProps> = ({
  recommendation,
  userProfile,
}) => {
  return (
    <DynamicPDFDownloadButton
      recommendation={recommendation}
      userProfile={userProfile}
    />
  );
};

export default PDFDownloadButton;
