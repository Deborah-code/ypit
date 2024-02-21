import Footer from "@/components/common/Footer";
import MobileNavBar from "@/components/common/MobileNavBar";
import Navbar from "@/components/common/Navbar";
import { Analytics } from '@vercel/analytics/react';

const Layout = ({ children }) => {
  return (
    <main
      className={`flex flex-col items-center justify-between px-[16px] py-[24px] max-w-[1340px] m-auto text-center overflow-hidden`}
    >
        <div className="hidden md:block w-[100%]">
         <Navbar />
        </div>
    <div className="block  w-[100%] md:hidden">
      <MobileNavBar />
    </div>
    {children}
    <Analytics />
    <Footer/>
    </main>
  );
}

export default Layout;