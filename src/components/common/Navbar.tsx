import { MenuData } from "@/data/menuData";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import LogoImg from "../../assets/commons/navLogo.png";
import Button from "./Button";
import JoinCommunity from "./JoinCommunity";
import Modal from "./Modal";
const Navbar: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  useEffect(() => {
    document.body.style.overflow = showModal === true ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [showModal])

  const handleMenuClick = () => {
    setShowModal(!showModal);
  };
  const router = useRouter();

  return (
    <nav className="w-[100%] flex items-center justify-between px-[20px] py-[20px] border-b border-gray-300 max-w-1320 mx-auto text-purple-100">
      <Image
        src={LogoImg}
        alt="Logo"
        className="max-w-[130px] max-h-[50px] cursor-pointer"
      />
      <div className="flex items-center gap-[56px]">
        {MenuData.map((item, index: number) => (
          <Link href={item.path} key={index} passHref>
            <p
              className={
                router.pathname === item.path
                  ? "border-b-2 border-purple-800 rounded-t"
                  : ""
              }
            >
              {item.title}
            </p>
          </Link>
        ))}
      </div>
      <Button globeButton text="Join Our Community" onClick={handleMenuClick} />
      {showModal && (
        <Modal
          isOpen={showModal}
          onClick={() => setShowModal(!showModal)}
          showCloseButton
        >
          <JoinCommunity />
        </Modal>
      )}
    </nav>
  );
};

export default Navbar;
