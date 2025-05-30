"use client";
import Email from "@/components/career/email";
import Interests from "@/components/career/interests";
import PersonalityTraits from "@/components/career/personalitytraits";
import Skills from "@/components/career/skills";
import WelcomePage from "@/components/career/welcome";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface UserProfile {
  firstName: string;
  email: string;
  interests: string[];
  skills: string[];
  personalityTraits: string[];
}

const Page = () => {
  const router = useRouter();

  // Form States
  const [firstName, setFirstName] = useState<string>("Suleiman");
  const [email, setEmail] = useState<string>("smistura706@gmail.com");
  const [selectedInterests, setSelectedInterests] = useState<string[]>([
    "Web Development",
    "UI/UX Design",
  ]);
  const [selectedSkills, setSelectedSkills] = useState<string[]>([
    "React",
    "TypeScript",
    "Tailwind CSS",
  ]);
  const [selectedTraits, setSelectedTraits] = useState<string[]>([
    "Creative",
    "Analytical",
  ]);

  // Flow Control States
  const [isNameSubmitted, setIsNameSubmitted] = useState<boolean>(true);
  const [isEmailSubmitted, setIsEmailSubmitted] = useState<boolean>(true);
  const [isInterestsSubmitted, setIsInterestsSubmitted] =
    useState<boolean>(true);
  const [isSkillsSubmitted, setIsSkillsSubmitted] = useState<boolean>(true);
  const [isTraitsSubmitted, setIsTraitsSubmitted] = useState<boolean>(true);

  // Loading and Error States
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

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

 // useEffect(() => {
 //   const savedUserData = localStorage.getItem("savedUserData");
 //   if (savedUserData) {
 //     const { firstName, email, interests } = JSON.parse(savedUserData);
 //     setFirstName(firstName);
 //     setEmail(email);
 //     setSelectedInterests(interests);
 //     setIsNameSubmitted(true);
 //     setIsEmailSubmitted(true);
 //     setIsInterestsSubmitted(true);
      // Clear the saved data after restoring it
 //     localStorage.removeItem("savedUserData");
 //   }
 // }, []);
  // In parent component (Page.tsx)

  const handleTraitsSubmit = async (traits: string[]) => {
    setIsLoading(true);
    setError(null);

    try {
      const userProfile: UserProfile = {
        firstName,
        email,
        interests: selectedInterests,
        skills: selectedSkills,
        personalityTraits: traits,
      };

      const response = await fetch("/api/ai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userProfile),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      console.log(data, "data is logged here");
      localStorage.setItem(
        "careerRecommendation",
        JSON.stringify(data.response)
      );
      localStorage.setItem("userProfile", JSON.stringify(userProfile));

      try {
        await router.replace("/career/report");
      } catch (navigationError) {
        // If navigation fails, go back to skills section
        setIsSkillsSubmitted(false);
        setError("Error generating report. Please try again.");
      }
    } catch (error) {
      console.error("Error getting career recommendation:", error);
      setError(
        error instanceof Error
          ? error.message
          : "An error occurred while processing your request"
      );
      // Go back to skills section while retaining name and email
      setIsSkillsSubmitted(false);
    } finally {
      setIsLoading(false);
    }
  };
  // Also update the error display in the parent component:
  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
        <h2 className="text-2xl font-bold text-red-600 mb-4">
          Something went wrong
        </h2>
        <p className="text-gray-700 mb-4">{error}</p>
        <button
          onClick={() => {
            setError(null);
            setIsSkillsSubmitted(false); // Go back to skills section
            setSelectedTraits([]); // Reset traits
          }}
          className="bg-purple-100 text-white px-6 py-2 rounded-lg hover:bg-purple-200 transition-colors"
        >
          Try Again
        </button>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-purple-100"></div>
        <p className="mt-4 text-gray-700">Analyzing your profile...</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen">
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
  );
};

export default Page;
