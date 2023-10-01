const IncorporateCard = ({ name, description, price }) => {
  return (
    <div className="w-[300px] h-[300px] bg-pred rounded-lg p-4">
      <div className="relative top-0 left-0 bg-pred w-full h-full text-white rounded-lg border-2 border-white flex flex-col justify-around items-center p-4">
        <div className="text-4xl font-bold font-mulish w-full">
          <p className="text-center mb-2">{name}</p>
          <div className="h-[1px] w-full grad-whitered"></div>
        </div>
        <div className="font-mulish text-white text-center font-light text-sm">
          {description}
        </div>
        <div className="text-3xl font-bold w-full font-mulish text-center">
          Starting @{price}
        </div>
      </div>
    </div>
  );
};

export default IncorporateCard;
