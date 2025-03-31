// components/career/report/ErrorState.tsx
import type { UserProfile } from "@/types/interfaces";
import { useRouter } from "next/navigation";

interface ErrorStateProps {
  errorMessage: string;
}

export default function ErrorState({ errorMessage }: ErrorStateProps) {
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
          email: profile.email,
          interests: profile.interests,
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
        <p className="text-gray-700 mb-4">{errorMessage}</p>
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
