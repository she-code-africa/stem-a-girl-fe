import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { useState } from "react";
import { navigationMenu } from "../../utils/appData";
import MenuLinks from "./MenuLinks";

const NavigationBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(null);

  return (
    <nav className="fixed top-0 right-0 left-0 bg-white py-5 drop-shadow-md text-sealBrown font-mulish z-[2]">
      <section className="w-[90%] max-w-[1280px] mx-auto flex gap-8 items-center ">
        <div className="flex justify-between w-full lg:w-fit ">
          <figure className="w-[37px] h-[37px]">
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
          className={`bg-white menu-items w-full min-h-[90vh] lg:min-h-[unset] ${
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
              />
            ))}
          </ul>
        </div>
      </section>
    </nav>
  );
};

export default NavigationBar;
