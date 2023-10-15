import Box from "./box";
const BoxList = ({ options }) => {
  return (
    <div className="h-full w-screen pt-8 grid grid-cols-1 md:grid-cols-3 block z-0 gap-2 place-items-center md:gap-8">
      {options.map((e) => {
        let { name, nameColor, image, description, href } = e;
        return (
          <div className="z-0 scale-[0.8] md:scale-[0.7] lg:scale-[0.9] mx-3">
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
