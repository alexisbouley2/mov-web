import WaitlistContent from "@/components/WaitlistContent";
import ClientWrapper from "@/components/ClientWrapper";

export default function WaitlistPage() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-4">
      <ClientWrapper>
        <WaitlistContent />
      </ClientWrapper>
    </div>
  );
}
