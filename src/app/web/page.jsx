import React from "react";
import WebApp from "@/components/WebApp";
import Website from "@/components/Website";
import Application from "@/components/Application";
import Process from "@/components/Process";
import Footer from "@/components/Footer";

const Web = () => {
  return (
    <div
      className="w-screen h-screen overflow-y-scroll overflow-x-hidden"
      style={{ scrollBehavior: "smooth" }}
    >
      <WebApp />
      <Website />
      <Application />
      <Process />
      <Footer />
    </div>
  );
};

export default Web;
