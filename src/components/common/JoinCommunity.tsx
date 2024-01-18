import JoinCom from "@/assets/commons/joinCom.png";
import { Icon } from "@iconify/react";
import Image from "next/image";
import React from "react";
import Button from "./Button";

const JoinCommunity: React.FC = () => {
  return (
    <main className="pb-[64px] pt-[24px] flex flex-col px-[16px] items-center text-center">
      <h1 className="text-5 pb-[24px]">
        Join our{" "}
        <span className="bg-gradient-to-r from-purple-100 via-purple-50 to-yellow-100 inline-block text-transparent bg-clip-text">
          community
        </span>
      </h1>
      <p className="pb-[61px]">
        Join over +1000 young tech professionals ready grow and learn
      </p>
      <div className="flex flex-col md:flex-col-reverse gap-[69px]">
        <section className="flex flex-row justify-between items-center gap-[18px] bg-purple-20 rounded-[41px] p-[8px] md:p-[16px]">
          <Icon icon="logos:whatsapp-icon" width="30" height="30" />
          <p>WhatsApp community</p>
          <a
            href="https://chat.whatsapp.com/JGIXg7zr6vx48YJAFv8mF2"
            target="_blank"
          >
            <Button text="Join us now" />
          </a>
        </section>
        <Image src={JoinCom} alt="Join Community" />
      </div>
    </main>
  );
};

export default JoinCommunity;
