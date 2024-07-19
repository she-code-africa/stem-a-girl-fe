import React, { useEffect, useRef } from "react";

function GoogleRecaptcha({ onToken }) {
  const recaptchaRef = useRef(null);
  const siteKey = process.env.REACT_APP_RECAPTCHA_SITE_KEY;
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
    script.addEventListener("load", () => {
      window.grecaptcha.ready(() => {
        window.grecaptcha
          .execute(siteKey, {
            action: "submit",
          })
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

  return (
    <div
      ref={recaptchaRef}
      className="g-recaptcha"
      data-sitekey={siteKey}
      data-size="invisible"
    ></div>
  );
}

export default GoogleRecaptcha;
