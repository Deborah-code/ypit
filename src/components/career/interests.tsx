import Button from "@/components/common/Button";
import { useState } from "react";

interface InterestsProps {
  firstName: string;
  onInterestsSubmit: (interests: string[]) => void;
}

const Interests: React.FC<InterestsProps> = ({
  firstName,
  onInterestsSubmit,
}) => {
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  const toggleInterest = (interest: string) => {
    console.log("Toggle interest called with:", interest);
    setSelectedInterests((prev) => {
      const isAlreadySelected = prev.includes(interest);
      const newInterests = isAlreadySelected
        ? prev.filter((i) => i !== interest)
        : [...prev, interest];
      console.log("New interests:", newInterests);
      return newInterests;
    });
  };

  const handleSubmit = () => {
    console.log("Submit clicked. Selected interests:", selectedInterests);
    if (selectedInterests.length > 0) {
      onInterestsSubmit(selectedInterests);
    }
  };

  // Career-focused interests
  const interests = [
    "Technology & Gadgets",
    "Business & Finance",
    "Art & Design",
    "Science & Research",
    "Healthcare & Wellness",
    "Teaching & Education",
    "Writing & Content",
    "Media & Entertainment",
    "Social Impact",
    "Building & Making",
    "Nature & Environment",
    "Analytics & Data",
    "Law & Politics",
    "Sports & Fitness",
    "Public Speaking",
  ];

  // Render interest button
  const renderInterestButton = (interest: string) => {
    const isSelected = selectedInterests.includes(interest);

    return (
      <Button
        key={interest}
        text={interest}
        noIcon
        onClick={() => toggleInterest(interest)}
        bgColor={isSelected ? "bg-[#5100BF]" : "bg-[#EEE6F9]"}
        textColor={isSelected ? "text-white" : "text-[#5100BF]"}
        borderColor="border-[#5100BF]"
      />
    );
  };

  return (
    <>
      <div className="bg-[#EEE6F9] px-[2rem] py-[0.5rem] rounded-2xl flex items-center justify-center mt-[50px]">
        <ul className="flex items-center justify-center gap-14 text-[#5100BF66] text-xl">
          <li className="text-[#5100BF]">Interests</li>
          <li>Skills</li>
          <li>personality traits</li>
        </ul>
      </div>

      <main className="max-w-7xl mx-auto w-full px-4">
        <section className="mt-[3rem] border-2 bg-[#CDCCCE1A] rounded-[10px] px-[24px] py-[50px]">
          <div className="mt-[15px] flex gap-[24px]">
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
            <h2 className="font-normal text-[32px] text-start text-[#3A3A3A]">
              Hi {firstName}, let&apos;s explore your interests! <br />
              Which of these areas naturally draw your attention?
            </h2>
          </div>

          <div className="mt-[15px]">
            <div className="flex gap-[24px] items-start flex-wrap">
              {interests
                .slice(0, 8)
                .map((interest) => renderInterestButton(interest))}
            </div>
            <br />
            <div className="flex gap-[24px] items-start flex-wrap">
              {interests
                .slice(8)
                .map((interest) => renderInterestButton(interest))}
            </div>
          </div>
        </section>

        <div className="mt-[100px] flex items-center justify-center">
          <Button
            text={`Next (${selectedInterests.length} selected)`}
            onClick={handleSubmit}
            bgColor="bg-[#5100BF]"
            textColor="text-white"
            className="px-[20px] h-14"
            disabled={selectedInterests.length === 0}
          />
        </div>
      </main>
    </>
  );
};

export default Interests;
