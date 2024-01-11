import { MenuData } from "@/data/menuData";
import { Icon } from "@iconify/react";
import React, { useState } from "react";
import Button from "./Button";
import JoinCommunity from "./JoinCommunity";
import Modal from "./Modal";

const MobileDropdown: React.FC = () => {
  const [changeModal, setChangeModal] = useState<boolean>(false);
  const joinCommunityClick = () => {
    setChangeModal(!changeModal);
  };
  return (
    <div className="p-[16px]">
      {changeModal ? (
        <Modal isOpen={changeModal} children={<JoinCommunity />} />
      ) : (
        <>
          {MenuData.map((item, index: number) => (
            <a
              href={item.path}
              key={index}
              className="flex items-center justify-center pb-[48px] gap-[8px]"
            >
              <p className="text-4 text-purple-100">{item.title}</p>
              <Icon
                icon="iconoir:arrow-tr"
                color="#5100bf"
                width="24"
                height="24"
              />
            </a>
          ))}
          <Button
            text="Join Our Community"
            globeButton={true}
            onClick={() => joinCommunityClick()}
          />
        </>
      )}
    </div>
  );
};

export default MobileDropdown;
