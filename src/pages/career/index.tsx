"use client";
import Email from "@/components/career/email";
import Interests from "@/components/career/interests";
import PersonalityTraits from "@/components/career/personalitytraits";
import Skills from "@/components/career/skills";
import WelcomePage from "@/components/career/welcome";
import { useState } from "react";

const Page = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [isNameSubmitted, setIsNameSubmitted] = useState<boolean>(false);
  const [isEmailSubmitted, setIsEmailSubmitted] = useState<boolean>(false);
  const [isInterestsSubmitted, setIsInterestsSubmitted] =
    useState<boolean>(false);
  const [isSkillsSubmitted, setIsSkillsSubmitted] = useState<boolean>(false);
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [selectedTraits, setSelectedTraits] = useState<string[]>([]);

  const handleNameChange = (name: string) => {
    setFirstName(name);
  };

  const handleNameSubmit = () => {
    if (firstName.trim()) {
      setIsNameSubmitted(true);
    }
  };

  const handleEmailChange = (email: string) => {
    setEmail(email);
  };

  const handleEmailSubmit = () => {
    if (email.trim()) {
      setIsEmailSubmitted(true);
    }
  };

  const handleInterestsSubmit = (interests: string[]) => {
    setSelectedInterests(interests);
    setIsInterestsSubmitted(true);
  };

  const handleSkillsSubmit = (skills: string[]) => {
    setSelectedSkills(skills);
    setIsSkillsSubmitted(true);
  };

  const handleTraitsSubmit = (traits: string[]) => {
    setSelectedTraits(traits);
    // Add final step logic here
  };

  return (
    <>
      <main>
        {!isNameSubmitted ? (
          <WelcomePage
            firstName={firstName}
            handleNameChange={handleNameChange}
            onSubmit={handleNameSubmit}
          />
        ) : !isEmailSubmitted ? (
          <Email
            firstName={firstName}
            email={email}
            handleEmailChange={handleEmailChange}
            onSubmit={handleEmailSubmit}
          />
        ) : !isInterestsSubmitted ? (
          <Interests
            firstName={firstName}
            onInterestsSubmit={handleInterestsSubmit}
          />
        ) : !isSkillsSubmitted ? (
          <Skills firstName={firstName} onSkillsSubmit={handleSkillsSubmit} />
        ) : (
          <PersonalityTraits
            firstName={firstName}
            onTraitsSubmit={handleTraitsSubmit}
          />
        )}
      </main>
    </>
  );
};

export default Page;
