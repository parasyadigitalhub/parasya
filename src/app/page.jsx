import Intro from "@/components/Intro";
import Vision from "@/components/Vision";
import Service from "@/components/Service";

import Team from "@/components/Team";
export default function Home() {
  return (
    <div
      className="snap-y snap-mandatory w-screen h-screen overflow-scroll overflow-x-hidden"
      style={{ scrollBehavior: "smooth" }}
    >
      <div className="snap-center">
        <Intro />
      </div>
      <div className="snap-center" id="services">
        <Service />
      </div>
      <div className="snap-center" id="team">
        <Vision />
      </div>
      <div className="snap-center" id="team">
        <Team />
      </div>
    </div>
  );
}
