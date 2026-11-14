import React from "react";

const CustomInput = ({
  label,
  name,
  type = "text",
  placeholder,
  register, // optional: pass react-hook-form's register to connect it to the form
  errors,
  ...rest // any extra props (value, onChange, disabled, etc.) go straight to the input
}) => {
  return (
    <div className="w-full">
      {label && (
        <label htmlFor={name} className="text-base text-[#211F1F] font-figtree">
          {label}
        </label>
      )}

      <div
        className={`w-full h-[52px] mt-2 rounded-lg border overflow-hidden bg-white duration-200 transition-colors ${
          errors
            ? "border-primaryPink"
            : "border-[#DDE6F0] focus-within:border-[rgb(233,152,203)]"
        }`}
      >
        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          {...(register ? register(name) : {})}
          {...rest}
          className="w-full h-full px-4 bg-white border-0 outline-none font-figtree text-base text-[#211F1F] placeholder:text-[#D9D9D9]"
        />
      </div>

      {errors?.message && (
        <p className="mt-1 text-primaryPink text-sm font-figtree">
          {errors.message}
        </p>
      )}
    </div>
  );
};

export default CustomInput;
