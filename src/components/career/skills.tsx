import Button from "@/components/common/Button";
import { useState } from "react";

interface SkillsProps {
  firstName: string;
  onSkillsSubmit: (skills: string[]) => void;
}

const Skills: React.FC<SkillsProps> = ({ firstName, onSkillsSubmit }) => {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  const toggleSkill = (skill: string) => {
    setSelectedSkills((prev) => {
      const isAlreadySelected = prev.includes(skill);
      const newSkills = isAlreadySelected
        ? prev.filter((i) => i !== skill)
        : [...prev, skill];
      return newSkills;
    });
  };

  const handleSubmit = () => {
    if (selectedSkills.length > 0) {
      onSkillsSubmit(selectedSkills);
    }
  };

  // Array of career-relevant skills
  const skills = [
    "Problem Solving",
    "Communication",
    "Technical Writing",
    "Data Analysis",
    "Project Management",
    "Design",
    "Programming",
    "Research",
    "Leadership",
    "Critical Thinking",
    "Teamwork",
    "Creativity",
  ];

  // Render skill button
  const renderSkillButton = (skill: string) => {
    const isSelected = selectedSkills.includes(skill);

    return (
      <Button
        key={skill}
        text={skill}
        noIcon
        onClick={() => toggleSkill(skill)}
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
          <li>Interests</li>
          <li className="text-[#5100BF]">Skills</li>
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
              Hi {firstName}, let&apos;s talk about your skills! <br />
              Which of these skills do you have or enjoy using?
            </h2>
          </div>

          <div className="mt-[15px]">
            <div className="flex gap-[24px] items-start flex-wrap">
              {skills.slice(0, 6).map((skill) => renderSkillButton(skill))}
            </div>
            <br />
            <div className="flex gap-[24px] items-start flex-wrap">
              {skills.slice(6).map((skill) => renderSkillButton(skill))}
            </div>
          </div>
        </section>

        <div className="mt-[100px] flex items-center justify-center">
          <Button
            text={`Next (${selectedSkills.length} selected)`}
            onClick={handleSubmit}
            bgColor="bg-[#5100BF]"
            textColor="text-white"
            className="px-[20px] h-14"
            disabled={selectedSkills.length === 0}
          />
        </div>
      </main>
    </>
  );
};

export default Skills;
