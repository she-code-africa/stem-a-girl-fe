import React, { useRef } from "react";

const PrimaryInput = ({
  label,
  name,
  type,
  placeholder,
  register,
  errors,
  isRequired = true,
}) => {
  const inputRef = useRef();

  const handleInputFocus = () => {
    inputRef.current.classList.add("border-[rgb(233,152,203)]");
  };

  const handleInputBlur = () => {
    inputRef.current.classList.remove("border-[rgb(233,152,203)]");
  };
  return (
    <div className="w-full md:max-w-[455px] mb-6">
      <label
        htmlFor={name}
        className="text-base capitalize font-medium text-[rgba(46,52,79,1)] "
      >
        {label}
      </label>

      <div
        className={`w-full rounded-md border border-gains h-[50px] overflow-hidden mt-2 ${
          errors && "border-primaryPink"
        }`}
        ref={inputRef}
      >
        {isRequired ? (
          <input
            type={type}
            placeholder={placeholder}
            {...register(name)}
            className="text-base w-full h-full border-0 outline-none px-3 bg-white placeholder:text-[rgba(130,130,130,1)]"
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
          />
        ) : (
          <input
            type={type}
            placeholder={placeholder}
            className="text-base w-full h-full border-0 outline-none px-3 bg-white placeholder:text-[rgba(130,130,130,1)]"
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
          />
        )}
      </div>

      <p className="text-primaryPink text-sm">{errors && errors?.message}</p>
    </div>
  );
};

export default PrimaryInput;
