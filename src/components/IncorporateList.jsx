import IncorporateCard from "./IncorporateCard";

const IncorporateList = ({ details }) => {
  return (
    <div className="w-screen px-16">
      <div className="flex w-full justify-around items-center">
        {details.map((e) => {
          let { name, description, price } = e;
          return (
            <IncorporateCard
              name={name}
              description={description}
              price={price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default IncorporateList;
