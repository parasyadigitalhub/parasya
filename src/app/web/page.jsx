import React from "react";
import WebApp from "@/components/WebApp";
import Website from "@/components/Website";
import Application from "@/components/Application";
import Process from "@/components/Process";

const Web = () => {
  return (
    <div
      className="w-screen h-screen overflow-y-scroll"
      style={{ scrollBehavior: "smooth" }}
    >
      <WebApp />
      <Website />
      <Application />
      <Process />
    </div>
  );
};

export default Web;
