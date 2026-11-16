import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import SignOut from "../../icons/SignOut";
import ArrowLeft from "../../icons/ArrowLeft";

const menuItems = [
  {
    title: "courses",
    path: "/courses",
  },
  {
    title: "view certificates",
    path: "/certificates",
  },
  {
    title: "change password",
    path: "/change-password",
  },
];

const ProfileDropdown = ({ avatar, avatars, setAvatar }) => {
  const [openDropdown, setOpendropdown] = useState(false);
  const [changeAvatar, setChangeAvatar] = useState(false);
  const wrapperRef = useRef(null);

  const closeDropdown = () => {
    setChangeAvatar(false);
    setOpendropdown(false);
  };

  const handleToggleDropdown = () => {
    setChangeAvatar(false);
    setOpendropdown((prev) => !prev);
  };

  // Close on outside click or Escape (only listens while the dropdown is open)
  useEffect(() => {
    if (!openDropdown) return;

    const handlePointerDown = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setChangeAvatar(false);
        setOpendropdown(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setChangeAvatar(false);
        setOpendropdown(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [openDropdown]);

  return (
    <section className="w-full ">
      <div
        ref={wrapperRef}
        className="relative w-full flex items-center justify-end"
      >
        <article className="w-full font-figtree flex justify-end items-center gap-[10px]">
          <p className="text-lg sm:text-xl md:text-2xl text-[#FEFEFE] font-medium">
            Hello, Junior
          </p>

          <button
            type="button"
            className="h-[50px] w-[50px] rounded-full overflow-hidden cursor-pointer"
            onClick={handleToggleDropdown}
            aria-label="Open profile menu"
            aria-expanded={openDropdown}
          >
            <img
              src={avatar}
              alt="User Avatar"
              className="w-full h-full object-cover"
            />
          </button>
        </article>

        {/* DROPDOWN */}

        {openDropdown && (
          <section className="w-full max-w-[301.25px] absolute right-0 top-full mt-3 font-figtree">
            <div className="w-full bg-white rounded-[15px]  py-[15px] overflow-hidden px-4 sm:px-[18px]">
              <article className="w-full flex items-center justify-between gap-[45px] ">
                <div className="w-full max-w-[168px] min-w-0 flex flex-col gap-y-[0.5px] ">
                  <p
                    title="Jane Doe"
                    className="truncate text-base sm:text-lg text-black font-medium capitalize"
                  >
                    Jane Doe
                  </p>
                  <p
                    title="Janedoe@gmail.com"
                    className="truncate text-[#898A8D] text-base sm:text-lg font-light"
                  >
                    Janedoe@gmail.com
                  </p>
                </div>

                <figure className="h-12 w-12 shrink-0 sm:h-[50px] sm:w-[50px] rounded-full overflow-hidden">
                  <img
                    src={avatar}
                    alt="User Avatar"
                    className="w-full h-full object-cover"
                  />
                </figure>
              </article>

              <span
                className={`block h-px w-full max-w-[225px] bg-[#F3F3F3] mt-[14.25px] ${
                  changeAvatar ? "mx-auto" : ""
                }`}
              ></span>

              {changeAvatar ? (
                <>
                  <p className="w-full mt-[14.25px] text-center text-base sm:text-lg font-medium text-black">
                    Choose your avatar
                  </p>

                  <div className="w-fit mx-auto mt-[11.64px] grid grid-cols-5 gap-y-[6.85px] gap-x-[16.53px]">
                    {avatars.map((item, i) => (
                      <button
                        type="button"
                        className={`w-[34.9px] h-[34.9px] overflow-hidden rounded-full ${
                          item === avatar ? "ring-2 ring-primaryPink" : ""
                        }`}
                        key={i}
                        onClick={() => setAvatar(item)}
                        aria-pressed={item === avatar}
                      >
                        <img
                          src={item}
                          alt={`Avatar ${i + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>

                  <div className="w-full flex justify-center items-center mt-[14.25px]">
                    <button
                      type="button"
                      className="w-full max-w-[85.46px] mx-auto flex items-center text-base sm:text-lg text-primaryPink font-medium justify-center gap-1"
                      onClick={() => setChangeAvatar(false)}
                    >
                      <ArrowLeft />
                      Go back
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <button
                    type="button"
                    className="mt-[14.25px] w-full text-left rounded-xl hover:bg-[#F3F3F3] py-[7.5px] px-[8.44px] text-base sm:text-lg font-medium text-black"
                    onClick={() => setChangeAvatar(true)}
                  >
                    Change avatar
                  </button>

                  <ul className="w-full mt-[14.25px]">
                    {menuItems.map((items, i) => (
                      <li
                        className="w-full py-[7.5px] mb-[14.25px] px-[8.44px] rounded-xl hover:bg-[#F3F3F3]"
                        key={i}
                      >
                        <Link
                          to={items.path}
                          onClick={closeDropdown}
                          className="block text-base sm:text-lg font-medium text-black capitalize"
                        >
                          {items.title}
                        </Link>
                      </li>
                    ))}
                  </ul>

                  <span className="block h-px w-full max-w-[225px] bg-[#F3F3F3] mb-[14.25px]"></span>

                  <button
                    type="button"
                    className="mt-[14.25px] w-full flex items-center gap-[7.5px] rounded-xl hover:bg-[#F3F3F3] py-[7.5px] px-[8.44px] text-base sm:text-lg font-medium text-black"
                  >
                    <SignOut /> Sign Out
                  </button>
                </>
              )}
            </div>
          </section>
        )}
      </div>
    </section>
  );
};

export default ProfileDropdown;
