import React, { useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const Captcha = ({ onChange }) => {
  const recaptchaRef = useRef(null);

  const handleRecaptchaChange = (token) => {
    if (onChange) {
      onChange(token);
    }
  };

  return (
    <div className="mt-4">
      <ReCAPTCHA
        ref={recaptchaRef}
        sitekey="6LfJihEqAAAAAG9rQOwT7g7sR7J5dbSoH-5YDAdO"
        onChange={handleRecaptchaChange}
      />
    </div>
  );
};

export default Captcha;
