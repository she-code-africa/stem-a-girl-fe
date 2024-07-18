import React, { useEffect, useRef } from "react";

function Recaptcha({ onToken }) {
  const recaptchaRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.google.com/recaptcha/api.js?render=6LeMShEqAAAAANL4rT2yerYM70w-yM_HPi4TvrEP";
    script.addEventListener("load", () => {
      window.grecaptcha.ready(() => {
        window.grecaptcha
          .execute("6LeMShEqAAAAANL4rT2yerYM70w-yM_HPi4TvrEP", { action: "submit" })
          .then((token) => {
            onToken(token);
          });
      });
    });
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [onToken]);

  return <div ref={recaptchaRef} className="g-recaptcha" data-sitekey="6LeMShEqAAAAANL4rT2yerYM70w-yM_HPi4TvrEP" data-size="invisible"></div>;
}

export default Recaptcha;
