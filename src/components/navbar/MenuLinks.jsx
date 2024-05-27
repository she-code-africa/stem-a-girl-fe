import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa6";

const MenuLinks = ({ menuItem }) => {
  const { pathname } = useLocation();

  return (
    <>
      {menuItem.isDropdown ? (
        <li
          className={`text-base font-medium cursor-pointer relative ${
            pathname === menuItem.path && "text-primaryPink font-bold"
          }`}
        >
          <Link to={menuItem.path} className="flex gap-1 items-center">
            <span className="">{menuItem.pathname}</span>
            <button className="">
              <FaAngleDown />
              {/* {showDropdown ? <FaAngleUp /> : <FaAngleDown />} */}
            </button>
          </Link>
        </li>
      ) : (
        <li
          className={`text-base font-medium ${
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
