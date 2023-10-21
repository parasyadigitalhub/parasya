import { Menu } from "@headlessui/react";
import { Fragment } from "react";
import { AiOutlineDown } from "react-icons/ai";
import Link from "next/link";
const DropDown = () => {
  const links = [
    { href: "/incorporation#legal", label: "Company Incorporation" },
    { href: "/social", label: "Social Media and Marketing" },
    { href: "/web", label: "Website development" },
    { href: "/web#application", label: "Application development" },
  ];
  return (
    <Menu>
      <Menu.Button>
        <span className="whitespace-nowrap flex items-center focus:text-pred">
          Our Services <AiOutlineDown />
        </span>
      </Menu.Button>{" "}
      <div className="absolute bottom-0 z-10">
        <Menu.Items>
          <div className="absolute left-0 flex flex-col bg-white px-2 py-4 rounded-lg">
            {links.map((link) => (
              /* Use the `active` state to conditionally style the active item. */
              <div className="m-2 p-2 border-b-2 border-pred">
                {" "}
                <Menu.Item key={link.href} as={Fragment}>
                  {({ active }) => (
                    <Link
                      href={link.href}
                      className="text-[#1c1c1c] hover:text-pred duration-300 ease-in-out"
                    >
                      {link.label}
                    </Link>
                  )}
                </Menu.Item>
              </div>
            ))}
          </div>
        </Menu.Items>
      </div>
    </Menu>
  );
};

export default DropDown;
