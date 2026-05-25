import Nav from "@/components/Nav";
import FlipbookSection from "@/components/FlipbookSection";
import NoiseOverlay from "@/components/NoiseOverlay";

export default function Home() {
  return (
    <>
      <NoiseOverlay />
      <Nav />
      <main>
        <FlipbookSection />
      </main>
    </>
  );
}
