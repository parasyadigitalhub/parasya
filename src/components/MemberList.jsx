import Member from "./Member";

const MemberList = ({ members }) => {
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-6 h-[350px] overflow-y-scroll w-screen place-items-center overflow-x-hidden md:h-full">
        {members.map((e) => {
          let { name, img, role } = e;
          return <Member name={name} url={img} role={role} />;
        })}
      </div>
    </div>
  );
};

export default MemberList;
