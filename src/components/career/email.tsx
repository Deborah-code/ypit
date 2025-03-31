import Logo from "@/assets/commons/Group 33.svg";
import Image, { type StaticImageData } from "next/image";

interface EmailProps {
  firstName: string;
  email: string;
  handleEmailChange: (email: string) => void;
  onSubmit: () => void;
}

const Email: React.FC<EmailProps> = ({
  firstName,
  email,
  handleEmailChange,
  onSubmit,
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      onSubmit();
    }
  };

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
            Hi {firstName}, please enter your email to get started.
          </h2>
        </div>

        <div className="flex items-center justify-center gap-[10px]">
          <form onSubmit={handleSubmit}>
            <div className="flex gap-[10px]">
              <input
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => handleEmailChange(e.target.value)}
                className="rounded-[15px] bg-[#ECECEC] w-[18rem] px-[15px] focus:outline-none py-[15px] text-md placeholder:text-[#ADADAD]"
              />
              <button
                type="submit"
                className="bg-[#5100BF] px-[20px] h-14 rounded-2xl"
              >
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
            </div>
          </form>
        </div>
      </main>
    </>
  );
};

export default Email;
