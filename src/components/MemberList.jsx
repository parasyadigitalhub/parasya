import Member from "./Member";

const MemberList = ({ members }) => {
  return (
    <div>
      <div className="grid grid-cols-3 gap-6">
        {members.map((e) => {
          let { name, img, role } = e;
          return <Member name={name} url={img} role={role} />;
        })}
      </div>
    </div>
  );
};

export default MemberList;
