import React from "react";
import { scaLogo } from "../../assets/images";
import { Link } from "react-router-dom";
import { aboutUsLinks, communityLinks } from "../../utils/appData";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <section className="bg-whiteSmoke w-full font-libreFranklin">
      <div className="w-[90%] mx-auto max-w-[1280px] md:flex md:items-center md:justify-between pt-10 pb-8 md:pt-20">
        <figure className="hidden md:block w-[58px] h-[90px]">
          <img src={scaLogo} alt="SCA-LOGO" className="w-full h-full" />
        </figure>

        <div className="flex flex-col md:flex-row md:items-start md:justify-end gap-10 md:gap-40">
          <article className="">
            <h2 className="text-xl md:text-[32px] font-bold capitalize mb-6">
              about us
            </h2>

            <ul className="flex flex-col gap-5">
              {aboutUsLinks.map((menu, i) => (
                <li
                  className="text-base font-normal hover:text-primaryPink"
                  key={i}
                >
                  <Link to={menu.path}>{menu.pathname}</Link>
                </li>
              ))}
            </ul>
          </article>
          <article className="">
            <h2 className="text-xl md:text-[32px] font-bold capitalize mb-6">
              community
            </h2>
            <ul className="flex flex-col gap-5">
              {communityLinks.map((menu, i) => (
                <li
                  className="text-base font-normal hover:text-primaryPink"
                  key={i}
                >
                  <Link to={menu.path}>{menu.pathname}</Link>
                </li>
              ))}
            </ul>

            <ul className="mt-5 flex items-center gap-4">
              <li className="w-[31px] h-[31px] flex items-center justify-center rounded-[50%] bg-black">
                <Link
                  to="https://www.linkedin.com/company/she-code-africa/"
                  title="Follow us on Linkedin"
                  target="_blank"
                  rel="noreferrer"
                  className=" text-white"
                >
                  <FaLinkedinIn />
                </Link>
              </li>
              <li className="w-[31px] h-[31px] flex items-center justify-center rounded-[50%] bg-black">
                <Link
                  to="https://www.facebook.com/shecodeafrica/"
                  title="Follow us on Facebook"
                  target="_blank"
                  rel="noreferrer"
                  className=" text-white"
                >
                  <FaFacebookF />
                </Link>
              </li>
              <li className="w-[31px] h-[31px] flex items-center justify-center rounded-[50%] bg-black">
                <Link
                  to="https://www.youtube.com/channel/UCNZzVEyJege5-d_ekKw6dFA"
                  title="Subscribe to our Youtube channel"
                  target="_blank"
                  rel="noreferrer"
                  className=" text-white"
                >
                  <FaYoutube />
                </Link>
              </li>
              <li className="w-[31px] h-[31px] flex items-center justify-center rounded-[50%] bg-black">
                <Link
                  to="https://www.instagram.com/shecodeafrica/"
                  title="Follow us on Instagram"
                  target="_blank"
                  rel="noreferrer"
                  className=" text-white"
                >
                  <FaInstagram />
                </Link>
              </li>
              <li className="w-[31px] h-[31px] flex items-center justify-center rounded-[50%] bg-black">
                <Link
                  to="https://www.twitter.com/shecodeafrica/"
                  title="Follow us on Twitter"
                  target="_blank"
                  rel="noreferrer"
                  className=" text-white"
                >
                  <FaTwitter />
                </Link>
              </li>
            </ul>
          </article>
        </div>
      </div>

      <div className="bg-black py-6 px-5">
        <p className="text-white text-base text-center w-full">
          All rights reserved. She Code Africa 2024.
        </p>
      </div>
    </section>
  );
};

export default Footer;
