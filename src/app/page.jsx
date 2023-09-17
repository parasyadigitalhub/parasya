import Incorporate from "@/components/Incorporate";
import Intro from "@/components/Intro";
import Legal from "@/components/Legal";
import Service from "@/components/Service";

export default function Home() {
  return (
    <div
      className="snap-y snap-mandatory w-screen h-screen overflow-scroll"
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
      <div className="snap-center" id="legalsupport">
        <Legal />
      </div>
    </div>
  );
}
