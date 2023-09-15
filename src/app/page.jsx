import Incorporate from "@/components/Incorporate";
import Intro from "@/components/Intro";
import Service from "@/components/Service";

export default function Home() {
  return (
    <div
      className="snap-y sm:snap-mandatory snap-proximity w-screen h-screen overflow-scroll"
      style={{ scrollBehavior: "smooth" }}
    >
      <div className="snap-center">
        <Intro />
      </div>
      <div className="snap-center" id="services">
        <Service />
      </div>
      <div className="snap-center" id="companyincorporation">
        <Incorporate />
      </div>
    </div>
  );
}
