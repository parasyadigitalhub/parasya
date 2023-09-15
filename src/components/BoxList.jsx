import Box from "./box";
const BoxList = ({ options }) => {
  return (
    <div className="h-full pb-16 grid grid-cols-1 gap-2 content-center mr-8 gap-4">
      {options.map((e) => {
        return (
          <div className="">
            <Box name={e} />
          </div>
        );
      })}
    </div>
  );
};

export default BoxList;
