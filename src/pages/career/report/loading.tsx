export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-purple-100"></div>
      <p className="mt-4 text-gray-700">Loading your career report...</p>
    </div>
  );
}
