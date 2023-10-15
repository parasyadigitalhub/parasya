import IncorporateCard from "./IncorporateCard";

const IncorporateList = ({ details }) => {
  return (
    <div className=" lg:px-16">
      <div className="flex flex-col lg:flex-row gap-6 w-full justify-around items-center">
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
