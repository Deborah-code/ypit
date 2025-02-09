import Button from "@/components/common/Button";
import Link from "next/link";

const Prompt = () => {
  return (
    <>
      {/* <div>prompt</div> */}
      <div className="bg-[#EEE6F9] px-[2rem] py-[0.5rem] rounded-2xl flex items-center justify-center mt-[50px]">
        <ul className="flex items-center justify-center gap-14 text-[#5100BF66] text-xl">
          <li className="text-[#5100BF]">Interests</li>
          <li>Skils</li>
          <li>personality traits</li>
        </ul>
      </div>

      <main className="max-w-7xl mx-auto w-full px-4 ">
        <section className="mt-[3rem] border-2 bg-[#CDCCCE1A] rounded-[10px] px-[24px] py-[50px]">
          <div className="mt-[15px] flex gap-[24px] ">
            <svg
              width="40"
              height="45"
              viewBox="0 0 98 97"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M61.6016 23H74.3021V35.7005H61.6016V23ZM48.901 35.7005H23.5V48.401H40.6986L32.8613 57.8969C32.0341 58.8994 30.9955 59.7066 29.8198 60.2606C28.6441 60.8146 27.3604 61.1018 26.0607 61.1016H23.5V73.8021H28.0255C33.2018 73.8021 38.109 71.4899 41.4043 67.4971L48.901 58.4145V73.8021H61.6016V35.7005H48.901Z"
                fill="#5100BF"
              />
            </svg>
            <h2 className="font-normal text-[32px] text-start   text-[#3A3A3A] ">
              Hi Fawaz, Great to have you here! <br /> What do you prefer to do
              when you’re less busy.
            </h2>
          </div>

          <div className="mt-[15px]">
            <div className="flex gap-[24px]  items-start ">
              <Button
                text="Play games"
                className="bg-[#EEE6F9] px-[2rem] py-[0.5rem] rounded-2xl border-2 border-[#5100BF] text-[#5100BF]"
                noIcon
              />
              <Button
                text="Sleep"
                className="bg-[#EEE6F9] px-[2rem] py-[0.5rem] rounded-2xl border-2 border-[#5100BF] text-[#5100BF]"
                noIcon
              />

              <Button
                text="Read books"
                className="bg-[#EEE6F9] px-[2rem] py-[0.5rem] rounded-2xl border-2 border-[#5100BF] text-[#5100BF]"
                noIcon
              />

              <Button
                text="Read books"
                className="bg-[#EEE6F9] px-[2rem] py-[0.5rem] rounded-2xl border-2 border-[#5100BF] text-[#5100BF]"
                noIcon
              />
            </div>
            <br />
            <div className="flex gap-[24px]  items-start ">
              <Button
                text="Read books"
                className="bg-[#EEE6F9] px-[2rem] py-[0.5rem] rounded-2xl border-2 border-[#5100BF] text-[#5100BF]"
                noIcon
              />
              <Button
                text="Read books"
                className="bg-[#EEE6F9] px-[2rem] py-[0.5rem] rounded-2xl border-2 border-[#5100BF] text-[#5100BF]"
                noIcon
              />
              <Button
                text="Read books"
                className="bg-[#EEE6F9] px-[2rem] py-[0.5rem] rounded-2xl border-2 border-[#5100BF] text-[#5100BF]"
                noIcon
              />
            </div>
          </div>
        </section>

        <div className="mt-[100px] flex items-center justify-center  gap-[10px]">
          <form>
            <input
              type="text"
              placeholder="Enter Text"
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
      </main>
    </>
  );
};

export default Prompt;
