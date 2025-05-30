export default function ReportHeader() {
  return (
    <div className="flex items-center justify-between px-10 mb-[15px] max-sm:flex-col max-sm:px-[10px] max-sm:items-start max-sm:justify-start">
      <div>
        <h2 className="text-left text-white text-4xl mb-[5px] font-semibold max-sm:pt-[12px] max-sm:text-3xl">
          Your career match report is ready
        </h2>
        <p className="text-left text-white text-[16px] font-light ml-[10px] max-sm:ml-0 max-sm:mb-[10px] max-sm:text-[14px]">
          Based on your interests, skills and personality traits
        </p>
      </div>
    </div>
  );
}
