import { UserProfile } from "@/types/interfaces";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { type ReactNode } from "react";
import BulletPointImage from "../../assets/commons/bulletpoint.svg";
import Pointer from "../../assets/commons/report-pointer.svg";

interface SectionHeaderProps {
  title: string;
}

interface SectionCardProps {
  children: ReactNode;
  className?: string;
}

interface BadgeProps {
  text: string;
}

interface SkillTagProps {
  skill: string;
}

interface BulletPointProps {
  text: string | ReactNode;
  isCustomBullet?: boolean;
}

interface ErrorDisplayProps {
  message: string;
}

export function SectionHeader({ title }: SectionHeaderProps) {
  return (
    <div className="flex items-start justify-start mt-[40px] gap-[20px]">
      <Image src={Pointer} alt="pointer" />
      <h2 className="text-2xl mb-[10px] font-[700]">{title}</h2>
    </div>
  );
}

export function SectionCard({ children, className = "" }: SectionCardProps) {
  return (
    <div
      className={`bg-[#ECECEC] text-black-70 flex-col items-start justify-center gap-16 mx-[25px] px-10 rounded-xl max-sm:mx-[8px] max-sm:px-[5px] ${className}`}
    >
      {children}
    </div>
  );
}

export function Badge({ text }: BadgeProps) {
  return (
    <span className="bg-gray-150/20 px-[10px] py-[5px] rounded-lg text-xs font-[400]">
      {text}
    </span>
  );
}

export function SkillTag({ skill }: SkillTagProps) {
  return (
    <li className="bg-gray-75 px-[15px] rounded-lg py-[5px] text-xs text-black-70">
      {skill}
    </li>
  );
}

export function BulletPoint({
  text,
  isCustomBullet = false,
}: BulletPointProps) {
  if (isCustomBullet) {
    return <Image src={BulletPointImage} alt="" />;
  }

  return <li className="text-[16px] text-left leading-[30px]">{text}</li>;
}

export function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-purple-100"></div>
      <p className="mt-4 text-gray-700">Loading your career report...</p>
    </div>
  );
}

export function ErrorDisplay({ message }: ErrorDisplayProps) {
  const router = useRouter();

  const handleTryAgain = () => {
    // Store the current user profile data before navigating
    const storedProfile = localStorage.getItem("userProfile");
    if (storedProfile) {
      const profile: UserProfile = JSON.parse(storedProfile);
      // Store just the name and email in a separate key
      localStorage.setItem(
        "savedUserData",
        JSON.stringify({
          firstName: profile.firstName,
          email: profile?.email,
          interests: profile?.interests,
        })
      );
    }
    // Navigate back to /career and the parent component will handle the state
    router.push("/career");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-red-600 mb-4">
          Something went wrong
        </h2>
        <p className="text-gray-700 mb-4">{message}</p>
        <button
          onClick={handleTryAgain}
          className="bg-purple-100 text-white px-6 py-2 rounded-lg hover:bg-purple-200 transition-colors"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
