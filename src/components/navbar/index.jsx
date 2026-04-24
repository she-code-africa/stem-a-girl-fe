import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { useRef, useState, useEffect } from "react";

import MenuLinks from "./MenuLinks";
import { useDynamicCourseNav } from "../../utils/helper";

const NavigationBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(null);
  const { courseDropdown, isLoading } = useDynamicCourseNav();
  const navigationMenu = [
    {
      pathname: "Courses",
      path: "/courses",
      isDropdown: true,
      dropdownMenu: isLoading ? [] : courseDropdown,
    },
    {
      pathname: "STEM Club",
      path: "/stem-clubs",
      isDropdown: false,
      dropdownMenu: [],
    },
    {
      pathname: "Outreach",
      path: "/outreach",
      isDropdown: false,
      dropdownMenu: [],
    },
    {
      pathname: "Contact us",
      path: "/contact-us",
      isDropdown: false,
      dropdownMenu: [],
    },
  ];

  const navRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setShowDropdown(null); // ✅ close dropdown
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav
      ref={navRef}
      className="fixed top-0 right-0 left-0 bg-white py-5 text-sealBrown font-mulish z-[20] font-figtree"
    >
      <section className="w-[90%] max-w-[1280px] mx-auto flex gap-8 items-center ">
        <div className="flex justify-between w-full lg:w-fit ">
          <figure className="w-[210px] h-[70px]">
            <Link to="/" className="w-full h-full logo block"></Link>
          </figure>

          <div className="lg:hidden">
            <button
              className="w-full h-full text-2xl transition-all"
              onClick={() => setIsNavOpen(!isNavOpen)}
            >
              {isNavOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        <div
          className={`bg-white menu-items w-full min-h-[90vh] lg:min-h-[unset] lg:flex lg:items-center lg:justify-between ${
            isNavOpen && "open-nav"
          }`}
        >
          <ul className="w-[90%] max-w-[1280px] gap-6 mx-auto lg:mx-0 lg:max-w-full flex flex-col lg:flex-row lg:gap-10 lg:w-full justify-center py-10 lg:py-0">
            {navigationMenu.map((menu, i) => (
              <MenuLinks
                key={i}
                menuItem={menu}
                isOpen={showDropdown === i}
                onToggle={() => setShowDropdown(showDropdown === i ? null : i)}
                closeDropdown={() => setShowDropdown(null)}
              />
            ))}
          </ul>
          <div className="flex w-[90%] max-w-[1280px] mx-auto  lg:max-w-[200px]">
            <Link
              to="/courses"
              className="text-white capitalize w-full max-w-[165px] h-[55px] rounded-lg flex items-center justify-center bg-primaryPink border-2 border-primaryPink hover:bg-[#5C0335] hover:border-[#5C0335] transition-all font-figtree text-base"
            >
              Start Learning
            </Link>
          </div>
        </div>
      </section>
    </nav>
  );
};

export default NavigationBar;
