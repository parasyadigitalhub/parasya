import Image from "next/image";

const Process = () => {
  return (
    <div className="p-10 relative">
      <p className="text-3xl font-nunito font-[900] text-center py-10">
        Process Overview
      </p>
      <div className="w-full flex justify-center items-start pb-32">
        <Image src="/workflow.png" width={1100} height={314} />
      </div>
    </div>
  );
};

export default Process;
