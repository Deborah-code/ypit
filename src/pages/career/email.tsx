import React from "react";
import Link from "next/link";
import Image, { type StaticImageData } from "next/image";
import Logo from "@/assets/commons/Group 33.svg";

const Email = () => {
  return (
    <>
      <main className="flex flex-col items-center justify-center mt-[38px] font-neue">
        <button className="bg-[#EEE6F9] text-[#5100BF] px-9 h-10 rounded-full">
          AI Career Path Recommender
        </button>
        <div className="mt-[15px] flex flex-col items-center justify-center">
          <svg
            width="78"
            height="97"
            viewBox="0 0 98 97"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="2.5"
              y="2"
              width="93"
              height="93"
              rx="8"
              stroke="#EEE6F9"
              strokeWidth="4"
            />
            <path
              d="M61.6016 23H74.3021V35.7005H61.6016V23ZM48.901 35.7005H23.5V48.401H40.6986L32.8613 57.8969C32.0341 58.8994 30.9955 59.7066 29.8198 60.2606C28.6441 60.8146 27.3604 61.1018 26.0607 61.1016H23.5V73.8021H28.0255C33.2018 73.8021 38.109 71.4899 41.4043 67.4971L48.901 58.4145V73.8021H61.6016V35.7005H48.901Z"
              fill="#5100BF"
            />
          </svg>
          <h2 className="font-bold text-[64px] text-[#171717] font-bigshoulder">
            Welcome
          </h2>
        </div>
        <p className="font-normal mx-52 text-[24px] mb-2 lg:mx-52 md:mx-5 0 max-sm:mx-0">
          Are you confused about your career path? Our AI recommender system
          provides personalised career paths based on your interests, skills,
          and personality traits.
        </p>

        <Image
          src={Logo as StaticImageData}
          alt="Hero Image"
          className="-pt-2 -mt-5 "
        />

        <div className="flex gap-[24px] mb-20 mt-3 items-center justify-center">
          <svg
            width="32"
            height="33"
            viewBox="0 0 32 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24 0.5H32V8.5H24V0.5ZM16 8.5H0V16.5H10.8333L5.89665 22.4814C5.3756 23.1129 4.72137 23.6213 3.9808 23.9703C3.24023 24.3193 2.43165 24.5001 1.61297 24.5H0V32.5H2.85059C6.11114 32.5 9.20216 31.0436 11.2778 28.5285L16 22.8075V32.5H24V8.5H16Z"
              fill="#5100BF"
            />
          </svg>
          <h2 className="text-[#3A3A3A] text-[24px]">
            Hi Fawaz, please enter your email to get started.
          </h2>
        </div>

        <div className="flex items-center justify-center gap-[10px]">
          <form>
            <input
              type="text"
              placeholder="Enter Email"
              className="rounded-[15px] bg-[#ECECEC] w-[18rem] px-[15px] focus:outline-none py-[15px] text-md placeholder:text-[#ADADAD]"
            />
          </form>
          <Link href="/career/welcome">
            <button className="bg-[#5100BF] px-[20px] h-14 rounded-2xl">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 14.4489C0.062226 14.3934 0.127846 14.3357 0.187809 14.2814L12.1601 2.30915L12.3603 2.1089L3.87498 2.1089C3.87498 1.37689 3.87498 0.677698 3.87498 0L16.0011 0C16.0011 4.03338 16.0011 8.09164 16.0011 12.1329L13.916 12.1329C13.916 9.33616 13.916 6.51223 13.916 3.6883L13.8572 3.66907L13.6999 3.8252L1.70273 15.828C1.64842 15.8823 1.60091 15.9412 1.54999 16L0 14.4489Z"
                  fill="white"
                />
              </svg>
            </button>
          </Link>
        </div>

        <p className="flex gap-[5px] mt-[30px] text-[#8E8D8D] text-[18px]">
          Made with
          <svg
            width="23"
            height="21"
            viewBox="0 0 23 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.1889 0.533325C4.96487 0.533254 3.76831 0.896167 2.75054 1.57617C1.73278 2.25617 0.939522 3.22271 0.471097 4.35356C0.00267194 5.48441 -0.119882 6.72877 0.118933 7.92928C0.357749 9.12978 0.947208 10.2325 1.81276 11.098L10.9576 20.2428C11.0288 20.3142 11.1134 20.3708 11.2065 20.4095C11.2997 20.4481 11.3995 20.468 11.5004 20.468C11.6012 20.468 11.7011 20.4481 11.7942 20.4095C11.8873 20.3708 11.9719 20.3142 12.0432 20.2428L21.188 11.0965C22.3172 9.92964 22.9425 8.36577 22.9292 6.74209C22.9159 5.1184 22.265 3.56498 21.1169 2.41682C19.9687 1.26867 18.4153 0.617753 16.7916 0.604453C15.1679 0.591152 13.604 1.21653 12.4372 2.34573L11.5004 3.28106L10.565 2.34573C9.99015 1.7709 9.30765 1.31497 8.55651 1.00399C7.80538 0.693011 7.00186 0.533077 6.1889 0.533325Z"
              fill="#8E8D8D"
            />
          </svg>
          by the YPIT Innovation Hub
        </p>
      </main>
    </>
  );
};

export default Email;
