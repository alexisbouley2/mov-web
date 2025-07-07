export default function LoadingSpinner() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
      <p className="text-white mt-4">Loading invitation...</p>
    </div>
  );
}
