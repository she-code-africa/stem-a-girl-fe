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
            <ul className="lg:absolute bg-white left-0 lg:w-max p-4 flex flex-col gap-4 rounded-2xl shadow-lg">
              {menuItem.dropdownMenu.map((menu, i) => (
                <li key={i}>
                  <Link
                    to={menu.url}
                    className={`group flex items-center gap-3 text-sm hover:text-primaryPink ${
                      pathname === menu.url && "text-primaryPink font-semibold"
                    }`}
                  >
                    {menu.icon && (
                      <span className="w-10 h-10 rounded-full bg-[#FFB8E0] group-hover:bg-primaryPink flex items-center justify-center shrink-0 transition-colors">
                        <menu.icon className="w-5 h-5 text-primaryPink group-hover:text-white transition-colors" />
                      </span>
                    )}
                    {menu.title}
                  </Link>
                </li>
              ))}
            </ul>
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
