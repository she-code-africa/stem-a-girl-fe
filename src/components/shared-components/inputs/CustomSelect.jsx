import React, { useState, useRef, useEffect } from "react";
import AngleDown from "../icons/AngleDown";

const CustomSelect = ({
  name,
  label,
  placeholder,
  options = [],
  onChange,
  defaultValue = "",
  isSearch = false,
  searchPlaceholder = "Search...",
}) => {
  const [value, setValue] = useState(defaultValue);
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const wrapperRef = useRef(null);

  // Turn every option into { label, value } so we handle both formats
  const normalizedOptions = options.map((opt) =>
    typeof opt === "string" ? { label: opt, value: opt } : opt,
  );

  const selectedOption = normalizedOptions.find((opt) => opt.value === value);

  // Only keep options that match what the user typed (ignores capital letters)
  const filteredOptions = normalizedOptions.filter((opt) =>
    String(opt.label).toLowerCase().includes(searchTerm.trim().toLowerCase()),
  );

  const closeDropdown = () => {
    setShowDropdown(false);
    setSearchTerm(""); // clear the search so it's fresh next time
  };

  const handleToggleDropdown = () => {
    if (showDropdown) {
      closeDropdown();
    } else {
      setShowDropdown(true);
    }
  };

  const handleSelect = (option) => {
    setValue(option.value);
    closeDropdown();
    if (onChange) onChange(option.value);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setShowDropdown(false);
        setSearchTerm("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      ref={wrapperRef}
      className={`relative ${showDropdown ? "z-10" : "z-0"}`}
    >
      <label htmlFor={name} className="text-[#211F1F] text-base font-figtree">
        {label}
      </label>

      <input type="hidden" name={name} value={value} />

      <div className="mt-2 border-[#DDE6F0] border h-[55px] rounded-lg relative z-[2]">
        <div
          className="w-full h-full p-4 flex items-center justify-between gap-3 cursor-pointer"
          onClick={handleToggleDropdown}
        >
          <p
            className={`${
              selectedOption ? "text-[#211F1F]" : "text-[#D9D9D9]"
            } font-figtree text-base`}
          >
            {selectedOption ? selectedOption.label : placeholder}
          </p>

          <AngleDown />
        </div>

        {/* DROPDOWN */}

        {showDropdown && (
          <div className="w-full absolute z-10 top-[60px] bg-white left-0 right-0 rounded-lg shadow-sm border border-[#DDE6F0] overflow-hidden">
            {/* SEARCH BAR (stays fixed at the top while the list scrolls) */}
            {isSearch && (
              <div className="p-2 border-b border-[#DDE6F0] bg-white">
                <input
                  type="text"
                  autoFocus
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder={searchPlaceholder}
                  className="w-full h-10 px-3 rounded-md border border-[#DDE6F0] font-figtree text-base text-[#211F1F] placeholder:text-[#D9D9D9] outline-none focus:border-primaryPink"
                />
              </div>
            )}

            {/* OPTIONS LIST */}
            <ul className="w-full max-h-[220px] overflow-y-auto no-scrollbar">
              {filteredOptions.length > 0 ? (
                filteredOptions.map((option) => (
                  <li
                    key={option.value}
                    onClick={() => handleSelect(option)}
                    className={`w-full p-4 cursor-pointer font-figtree text-base text-[#211F1F] hover:bg-gray-100 ${
                      option.value === value ? "bg-gray-50 font-medium" : ""
                    }`}
                  >
                    {option.label}
                  </li>
                ))
              ) : (
                <li className="w-full p-4">
                  <span className="inline-block w-full text-sm text-[#211F1F]">
                    {normalizedOptions.length > 0
                      ? "No results found."
                      : "No data available."}
                  </span>
                </li>
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomSelect;
