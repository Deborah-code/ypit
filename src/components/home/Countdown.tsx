import { useEffect, useState } from "react";
import Button from "../common/Button";
import countdown from "@/functions/countdown";
import Link from "next/link";

interface Countdown {
  daysLeft: string | number;
  hoursLeft: string | number;
  minutesLeft: string | number;
}
const countdownStyles =
  "text-purple-100 py-[12px] mx-[5px] px-[6px] md:px-[12px] text-center text-4 md:text-2 font-bigshoulder rounded-[8px]";
const splitNumbers = (param: number | string) => {
  if (typeof param === "number" && param < 10) {
    return `0${param}`;
  }
  return String(param).split("");
};

const Countdown = () => {
  const [countDown, setCountDown] = useState<Countdown>({
    daysLeft: "00",
    hoursLeft: "00",
    minutesLeft: "00",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const arr = countdown();
      setCountDown(arr);
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  const numOfDaysVal1 = splitNumbers(countDown.daysLeft)[0];
  const numOfDaysVal2 = splitNumbers(countDown.daysLeft)[1];
  const numOfHoursVal1 = splitNumbers(countDown.hoursLeft)[0];
  const numOfHoursVal2 = splitNumbers(countDown.hoursLeft)[1];
  const numOfMinsVal1 = splitNumbers(countDown.minutesLeft)[0];
  const numOfMinsVal2 = splitNumbers(countDown.minutesLeft)[1];

  return (
    <section className=" text-left bg-red-5 w-[100%] ">
      <div
        style={{ backgroundColor: "#fff" }}
        className=" py-8 px-7 md:px-8 w-[100%] md:w-[max-content] rounded-[16px] "
      >
        <p className=" text-purple-100 text-4 text-center md:text-left pb-9 ">
          Series F
        </p>
        <div className="m-auto flex items-center justify-center ">
          <p className={`${countdownStyles}  bg-purple-20`}>{numOfDaysVal1}</p>
          <p className={`${countdownStyles}  bg-purple-20`}>{numOfDaysVal2}</p>
          <p className={`${countdownStyles}`}>:</p>
          <p className={`${countdownStyles}  bg-purple-20`}>{numOfHoursVal1}</p>
          <p className={`${countdownStyles}  bg-purple-20`}>{numOfHoursVal2}</p>
          <p className={`${countdownStyles}`}>:</p>
          <p className={`${countdownStyles}  bg-purple-20`}>{numOfMinsVal1}</p>
          <p className={`${countdownStyles}  bg-purple-20`}>{numOfMinsVal2}</p>
        </div>
      </div>
      <p className="text-white md:w-[70%] text-[1.15rem] my-[1rem] ">
        Ignite your creativity and learn from visionary speakers shaping the
        future.
        <br />
        November 30th, 2024 1:00pm
      </p>
      <div className=" flex gap-[1rem] ">
        <a
          href="https://tally.so/r/wbrPpo?fbclid=PAZXh0bgNhZW0CMTEAAaaBqWm4FFHYBS_PT4q3iDRoNn_WO_qICJW9EEL1O9tRuBhk-YvnyE8fBfU_aem_F5bOU3kdvkV3VUetoyicFQ"
          target="_blank"
        >
          <Button
            text="Save a spot now!"
            className="bg-white text-black-100 text-9 md:text-6"
            borderColor="border-black-100"
            textColor="text-black-100"
          />
        </a>
        <Link href="/events">
          <Button
            text="Check out other events"
            noIcon
            transparent
            className="text-9 md:text-6"
          />
        </Link>
      </div>
    </section>
  );
};

export default Countdown;
