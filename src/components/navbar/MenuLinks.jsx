import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa6";

const MenuLinks = ({ menuItem, isOpen, onToggle }) => {
  const { pathname } = useLocation();

  return (
    <>
      {menuItem.isDropdown ? (
        <li className={`text-base font-medium cursor-pointer relative `}>
          <span
            className={`flex gap-1 items-center hover:text-primaryPink ${
              pathname.includes(menuItem.pathname.toLowerCase()) &&
              "text-primaryPink font-bold"
            }`}
          >
            <Link to={menuItem.path}>
              <span className="">{menuItem.pathname}</span>
            </Link>
            <button className="" onClick={onToggle}>
              <FaAngleDown
                className={` ${isOpen && "transition-all rotate-180"}`}
              />
            </button>
          </span>

          {isOpen && (
            <>
              <ul className="lg:absolute bg-white left-0 lg:w-max p-4 flex flex-col gap-3">
                {menuItem.dropdownMenu.map((menu, i) => (
                  <li className="text-sm hover:text-primaryPink" key={i}>
                    <Link
                      to={menu.url}
                      className={`pb-1 ${
                        pathname === menu.url &&
                        "border-b-2 border-b-primaryPink"
                      }`}
                    >
                      {menu.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          )}
        </li>
      ) : (
        <li
          className={`text-base font-medium hover:text-primaryPink ${
            pathname === menuItem.path && "text-primaryPink font-bold"
          }`}
        >
          <Link to={menuItem.path}>{menuItem.pathname}</Link>
        </li>
      )}
    </>
  );
};

export default MenuLinks;
