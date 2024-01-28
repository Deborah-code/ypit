import LogoImg from "@/assets/commons/navLogo.png";
import { Icon } from "@iconify/react";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import MobileDropdown from "./MobileDropdown";
import Modal from "./Modal";

const MobileNavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen === true ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isMenuOpen])

  return (
    <nav className="flex flex-row justify-between items-center w-[100%]">
      <Image
        src={LogoImg}
        alt="Logo"
        className="max-w-[72px] max-h-[30px] cursor-pointer"
      />
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="bg-purple-20 rounded-[50%] border-purple-100 border-solid border-2 p-[8px]"
      >
        {isMenuOpen ? (
          <Icon icon="ph:x-thin" color="#5100bf" width={25} height={25} />
        ) : (
          <Icon
            icon="system-uicons:menu-hamburger"
            color="#5100bf"
            width={25}
            height={25}
          />
        )}
      </button>
      {isMenuOpen && (
        <Modal isOpen={isMenuOpen}>
          <MobileDropdown />
        </Modal>
      )}
    </nav>
  );
};

export default MobileNavBar;
