import Footer from "@/components/common/Footer";
import MobileNavBar from "@/components/common/MobileNavBar";
import Navbar from "@/components/common/Navbar";
import { useRouter } from "next/router";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

type Props = {
  children: string | JSX.Element | JSX.Element[];
};

const Layout = ({ children }: Props) => {
  const router = useRouter();
  const isCareerPage = router.pathname === "/career";
  const isReportPage = router.pathname === "/career/report";

  return (
    <main
      className={`flex flex-col items-center justify-between px-[16px] py-[24px] max-w-[1340px] m-auto text-center overflow-hidden`}
    >
      <div className="hidden md:block w-[100%]">
        {!isReportPage && <Navbar />}
      </div>
      <div className="block w-[100%] md:hidden">
        <MobileNavBar />
      </div>
      {children}
      <Analytics />
      <SpeedInsights />
      {!isCareerPage && !isReportPage && <Footer />}
    </main>
  );
};

export default Layout;
