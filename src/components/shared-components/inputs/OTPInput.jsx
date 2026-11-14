import React, { useRef, useState } from "react";

const OTPInput = ({ length = 6, onChange }) => {
  const [digits, setDigits] = useState(Array(length).fill(""));
  const inputsRef = useRef([]);

  // Updates the boxes and tells the parent page the full code, e.g. "123456"
  const updateDigits = (newDigits) => {
    setDigits(newDigits);
    if (onChange) onChange(newDigits.join(""));
  };

  const focusBox = (index) => {
    const box = inputsRef.current[index];
    if (box) {
      box.focus();
      box.select();
    }
  };

  const handleChange = (e, index) => {
    // keep only numbers, and only the last character typed
    const cleaned = e.target.value.replace(/\D/g, "");
    if (!cleaned) return;

    const newDigits = [...digits];
    newDigits[index] = cleaned.slice(-1);
    updateDigits(newDigits);

    if (index < length - 1) focusBox(index + 1);
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      e.preventDefault();
      const newDigits = [...digits];

      if (newDigits[index]) {
        // box has a number: clear it
        newDigits[index] = "";
        updateDigits(newDigits);
      } else if (index > 0) {
        // box is empty: clear the previous one and move back
        newDigits[index - 1] = "";
        updateDigits(newDigits);
        focusBox(index - 1);
      }
    } else if (e.key === "ArrowLeft" && index > 0) {
      focusBox(index - 1);
    } else if (e.key === "ArrowRight" && index < length - 1) {
      focusBox(index + 1);
    }
  };

  // Lets the user paste the whole code at once
  const handlePaste = (e) => {
    e.preventDefault();
    const pasted = e.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, length);

    if (!pasted) return;

    const newDigits = Array(length).fill("");
    pasted.split("").forEach((char, i) => {
      newDigits[i] = char;
    });
    updateDigits(newDigits);
    focusBox(Math.min(pasted.length, length - 1));
  };

  return (
    <div className="w-full grid grid-cols-6 gap-[10px]">
      {digits.map((digit, index) => (
        <input
          key={index}
          ref={(el) => (inputsRef.current[index] = el)}
          type="text"
          inputMode="numeric"
          autoComplete={index === 0 ? "one-time-code" : "off"}
          maxLength={1}
          value={digit}
          placeholder="-----"
          aria-label={`Digit ${index + 1}`}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          onPaste={handlePaste}
          onFocus={(e) => e.target.select()}
          className="w-full h-[52px] min-w-0 rounded-lg border border-[#DDE6F0] bg-white text-center font-figtree text-base text-black placeholder:text-[#D9D9D9] outline-none duration-200 transition-colors focus:border-[rgb(233,152,203)]"
        />
      ))}
    </div>
  );
};

export default OTPInput;
