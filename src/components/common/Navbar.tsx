import { MenuData } from "@/data/menuData";
import Image from "next/image";
import { useState } from "react";
import LogoImg from "../../assets/commons/navLogo.png";
import Button from "./Button";
import JoinCommunity from "./JoinCommunity";
import Modal from "./Modal";

const Navbar: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [showModal, setShowModal] = useState<boolean>(false);
  const handleMenuItemClick = (index: number) => {
    setActiveIndex(index);
  };

  const handleMenuClick = () => {
    setShowModal(!showModal);
  };
  return (
    <nav className="w-[100%] flex items-center justify-between px-[20px] py-[20px] border-b-2 border-gray-300 max-w-1320 mx-auto text-purple-100">
      <Image
        src={LogoImg}
        alt="Logo"
        className="max-w-[130px] max-h-[50px] cursor-pointer"
      />
      <div className="flex items-center gap-[56px]">
        {MenuData.map((item, index: number) => (
          <a href={item.path} key={index}>
            <p
              className={
                activeIndex === index
                  ? "border-b-4 border-purple-800"
                  : undefined
              }
              onClick={() => handleMenuItemClick(index)}
            >
              {item.title}
            </p>
          </a>
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
