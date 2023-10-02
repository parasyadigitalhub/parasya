import Box from "./box";
const BoxList = ({ options }) => {
  return (
    <div className="h-full w-screen pt-8 grid grid-cols-1 lg:grid-cols-3 block z-0 gap-2 content-center mr-8 gap-4">
      {options.map((e) => {
        let { name, nameColor, image, description, href } = e;
        return (
          <div className="z-0">
            <Box
              name={name}
              namecolor={nameColor}
              image={image}
              description={description}
              href={href}
            />
          </div>
        );
      })}
    </div>
  );
};

export default BoxList;
