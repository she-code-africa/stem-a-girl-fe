import React, { useState } from "react";
import EyeOpen from "../icons/EyeOpen";
import EyeSlash from "../icons/EyeSlash";

const CustomPasswordInput = ({
  label,
  name,
  placeholder,
  register, // optional: react-hook-form's register
  errors,
  ...rest // value, onChange, disabled, etc.
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full">
      {label && (
        <label htmlFor={name} className="text-base text-[#211F1F] font-figtree">
          {label}
        </label>
      )}

      <div
        className={`w-full h-[52px] overflow-hidden mt-2 rounded-lg border bg-white flex items-center duration-200 transition-colors ${
          errors
            ? "border-primaryPink"
            : "border-[#DDE6F0] focus-within:border-[rgb(233,152,203)]"
        }`}
      >
        <input
          id={name}
          name={name}
          type={showPassword ? "text" : "password"}
          placeholder={placeholder}
          {...(register ? register(name) : {})}
          {...rest}
          className="flex-1 min-w-0 h-full pl-4 pr-2 bg-transparent border-0 outline-none font-figtree text-base text-[#211F1F] placeholder:text-[#D9D9D9]"
        />

        {/* Eye button: eye = password is hidden, slashed eye = password is showing */}
        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          aria-label={showPassword ? "Hide password" : "Show password"}
          className="h-full px-4 flex items-center justify-center cursor-pointer"
        >
          {showPassword ? <EyeSlash /> : <EyeOpen />}
        </button>
      </div>

      {errors?.message && (
        <p className="mt-1 text-primaryPink text-sm font-figtree">
          {errors.message}
        </p>
      )}
    </div>
  );
};

export default CustomPasswordInput;
