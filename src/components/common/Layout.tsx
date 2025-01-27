import { useRouter } from 'next/router';
import Footer from "@/components/common/Footer";
import MobileNavBar from "@/components/common/MobileNavBar";
import Navbar from "@/components/common/Navbar";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

type Props = {
  children: string | JSX.Element | JSX.Element[];
};

const Layout = ({ children }: Props) => {
  const router = useRouter();
  const isCareerPage = router.pathname === '/career';
  const isReportPage = router.pathname === '/report';
//px-[16px]  max-w-[1340px] 

  return (
    <main
    className={`flex flex-col items-center justify-between  py-[24px] 
      ${isReportPage ? 'w-full' : 'max-w-[1340px] px-[16px]'} m-auto text-center overflow-hidden`}
  >
      <div className="hidden md:block w-[100%]">
        <Navbar />
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
