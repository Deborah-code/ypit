import {
  type CareerRecommendation,
  type UserProfile,
} from "../../../types/interfaces";

import Image from "next/image";
import { useEffect, useState } from "react";
import love from "../../../assets/career/love.svg";
import CareerMatchesSection from "../../../components/career/report/CareerMatchesSection";
import ErrorState from "../../../components/career/report/ErrorState";
import LearningPathSection from "../../../components/career/report/LearningPathSection";
import LoadingState from "../../../components/career/report/LoadingState";
import ReportHeader from "../../../components/career/report/ReportHeader";
import SummarySection from "../../../components/career/report/SummarySection";

export default function ReportPage() {
  const [recommendation, setRecommendation] = useState<CareerRecommendation>();
  const [userProfile, setUserProfile] = useState<UserProfile>();
  const [error, setError] = useState<string>();

  useEffect(() => {
    try {
      const storedRecommendation = localStorage.getItem("careerRecommendation");
      const storedProfile = localStorage.getItem("userProfile");

      if (!storedRecommendation || !storedProfile) {
        throw new Error("No recommendation data found");
      }

      setRecommendation(JSON.parse(storedRecommendation));
      setUserProfile(JSON.parse(storedProfile));
    } catch (error) {
      console.error("Error loading recommendation:", error);
      setError("Unable to load your career recommendation. Please try again.");
    }
  }, []);

  if (error) {
    return <ErrorState errorMessage={error} />;
  }

  if (!recommendation || !userProfile) {
    return <LoadingState />;
  }

  return (
    <>
      <main className="bg-purple-100 w-full h-full px-14 py-[64px] font-sans max-sm:px-[12px] max-sm:py-8">
        <section className="flex flex-col">
          <ReportHeader />
          <SummarySection recommendation={recommendation} />
          <CareerMatchesSection careerMatches={recommendation.careerMatches} />
          <LearningPathSection learningPath={recommendation.learningPath} />
        </section>

        
      </main>
      <footer id="report-footer" className="flex justify-center pb-[20px]">
        <p className="flex gap-[5px] mt-[20px] text-[#8E8D8D] text-[18px]">
          Made with
          <Image src={love} alt="heart icon" />
          by the YPIT Innovation Hub
        </p>
      </footer>
    </>
  );
}
