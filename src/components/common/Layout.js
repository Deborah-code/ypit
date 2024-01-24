import Footer from "@/components/common/Footer";
import MobileNavBar from "@/components/common/MobileNavBar";
import Navbar from "@/components/common/Navbar";
import { useWindowSize } from "@uidotdev/usehooks";

const Layout = ({ children }) => {
  const windowWidth= useWindowSize().width;
  console.log(windowWidth);
  return (
    <main
      className="flex flex-col items-center justify-between px-[16px] py-[24px] max-w-[1340px] m-auto text-center overflow-hidden"
    >
        <div className="hidden md:block w-[100%]">
        {windowWidth > 767 && <Navbar />}
        </div>
    <div className="block  w-[100%] md:hidden">
      {windowWidth < 768 && <MobileNavBar />}
    </div>
    {children}
    <Footer/>
    </main>
  );
}

export default Layout;