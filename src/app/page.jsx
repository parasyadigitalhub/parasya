import Intro from "@/components/Intro";

export default function Home() {
  return (
    <div className="snap-y sm:snap-mandatory snap-proximity w-screen h-screen overflow-scroll">
      <div className="snap-center">
        <Intro />
      </div>
      <div className="snap-center">
        <Intro />
      </div>
    </div>
  );
}
