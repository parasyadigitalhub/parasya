import Intro from "@/components/Intro";
import Vision from "@/components/Vision";
import Service from "@/components/Service";

import Team from "@/components/Team";
import Testmonial from "@/components/Testmonial";
export default function Home() {
  return (
    <div
      className="snap-y snap-mandatory w-screen h-screen overflow-scroll overflow-x-hidden"
      style={{ scrollBehavior: "smooth" }}
    >
      <div className="snap-center">
        <Intro />
      </div>
      <div className="snap-start" id="services">
        <Service />
      </div>
      <div className="snap-start" id="vision">
        <Vision />
        <Team />
      </div>
      <div className="snap-center" id="testmonial">
        <Testmonial />
      </div>
    </div>
  );
}
