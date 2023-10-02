const Member = ({ name, role, url }) => {
  return (
    <div className="w-[300px] h-[300px] border-2 border-pred border-b-8 gap-2 rounded-lg shadow-lg p-8 flex flex-col justify-center items-center">
      <div
        className="rounded-[50%] w-36 aspect-square"
        style={{
          background: `url(${url})`,
          backgroundSize: "cover",
        }}
      ></div>
      <span className="text-2xl font-black text-black font-raleway">
        {name}
      </span>
      <span className="text-sm font-medium">{role}</span>
    </div>
  );
};

export default Member;
