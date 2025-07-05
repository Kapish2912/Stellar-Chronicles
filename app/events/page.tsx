// app/events/page.tsx
import EventsSection from "@/components/ui/EventsSection";
import Loader from "@/components/ui/Loader";

export default function EventsPage() {
  return (
    <main className="pt-32">
        <Loader/>
      <EventsSection />
    </main>
  );
}
