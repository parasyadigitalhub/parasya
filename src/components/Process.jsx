import Image from "next/image";

const Process = () => {
  return (
    <div className="p-10 relative h-full">
      <p className="text-3xl font-nunito font-[900] text-center py-10">
        Process Overview
      </p>
      <div className="w-full h-1/2 flex  relative justify-center items-start pb-32">
        <Image src="/workflow.png" layout="fill" objectFit="fill" />
      </div>
    </div>
  );
};

export default Process;
