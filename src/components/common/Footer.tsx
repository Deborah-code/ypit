import { MenuData } from "@/data/menuData";
import { socialLinks, type SocialLinks } from "@/data/socialLinks";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import LogoImg from "../../assets/commons/navLogo.png";
import largeLogo from "../../assets/commons/ypitLargeGroupLogo.png";
import Button from "./Button";
import JoinCommunity from "./JoinCommunity";
import Modal from "./Modal";

const Footer: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const handleMenuClick = () => {
    setShowModal(!showModal);
  };
  return (
    <footer className="text-center max-w-1220 mx-auto pt-3 md:pt-1">
      <Image
        src={largeLogo}
        alt="Large Ypit Logo"
        className="max-w-[70%] md:max-w-[50%] m-auto"
      />
      <section className="pt-[32px] md:pt-[56px] text-5 md:text-3">
        <h4>Discover the power of young people in tech.</h4>
        <h4 className="bg-gradient-to-r from-purple-100 via-purple-50 to-yellow-100 inline-block text-transparent bg-clip-text">
          Connect and Grow!
        </h4>
      </section>
      <div className="pt-[24px] md:pt-[32px] flex justify-center">
        <Button
          text="Join the YPIT community"
          globeButton
          onClick={handleMenuClick}
        />
      </div>
      {showModal && (
        <Modal
          isOpen={showModal}
          onClick={() => setShowModal(!showModal)}
          showCloseButton
        >
          <JoinCommunity />
        </Modal>
      )}
      <section className="pt-5 md:pt-1 flex flex-col md:flex-row justify-between">
        <div className="md:max-w-[40%] text-start">
          <Image
            src={LogoImg}
            alt="Logo"
            className="max-w-[130px] max-h-[50px] cursor-pointer"
          />
          <p className="text-purple-100 text-6 md:text-4 pt-9 md:pt-8">
            A community of Young People in Tech connecting, and growing, with a
            mission to make an impact in Africa using technology
          </p>
        </div>
        <div className="text-purple-100 text-6 md:text-5 text-start pt-5 flex flex-col gap-9 min-w-[50%]">
          <strong>Quick Links</strong>
          <div className="flex flex-col gap-9 md:flex-row">
            {MenuData.map((item, index: number) => (
              <Link href={item.path} key={index}>
                <p>{item.title}</p>
              </Link>
            ))}
          </div>
          <div className="text-purple-100 text-start pt-8">
            <strong>Follow us on socials</strong>
            <div className="flex justify-start items-center gap-8 pt-8">
              {socialLinks.map((item: SocialLinks, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  aria-label={`${item.name} Link opens in new tab`}
                >
                  <Icon
                    icon={item.iconSource}
                    width={24}
                    height={24}
                    color="#5100BF"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
      <p className="text-purple-100 text-start pt-5 md:text-center">
        Made with 💜 by the YPIT innovation hub
      </p>
    </footer>
  );
};

export default Footer;
