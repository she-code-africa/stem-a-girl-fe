import React, { useEffect, useState } from "react";
import { badge, scaLogo } from "../../assets/images";
import { Link } from "react-router-dom";
import {
  aboutUsLinks,
  communityLinks,
  getInvolvedLinks,
} from "../../utils/appData";
import { useQuery } from "@tanstack/react-query";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa6";
import { NewsLetter } from "../modals";
import { getReports } from "../../services/queries";

const Footer = () => {
  const [showNewsLetterModal, setShowNewsLetterModal] = useState(false);
  const [openCaret, setOpenCaret] = useState(false);
  const { data, isError, isLoading, isSuccess } = useQuery({
    queryKey: ["reports"],
    queryFn: getReports,
  });

  const [reports, setReports] = useState([]);

  useEffect(() => {
    if (isSuccess) {
      setReports(data);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);
  return (
    <footer className="bg-[#FEFEFE] w-full font-figtree">
      <div className="w-[90%] mx-auto max-w-[1280px] lg:flex lg:items-start lg:justify-between pt-10 pb-8 md:pt-16 space-y-10 lg:space-y-0">
        <figure className="w-full max-w-[130px] h-[162px]">
          <img
            src={scaLogo}
            alt="SCA-LOGO"
            className="w-full h-full object-contain"
          />
        </figure>

        <section className="flex flex-col md:flex-row md:items-start gap-10 lg:gap-16">
          <article className="">
            <h2 className="text-xl md:text-[32px] font-bold capitalize  font-figtree">
              Get Involved
            </h2>

            <ul className="flex flex-col gap-[15px] mt-3">
              {getInvolvedLinks.map((menu, i) => (
                <li
                  className="text-base font-normal hover:text-primaryPink"
                  key={i}
                >
                  <Link to={menu.path}>{menu.pathname}</Link>
                </li>
              ))}

              {isError ? null : (
                <li className="relative text-base font-normal hover:text-primaryPink">
                  <button
                    className="text-left hover:text-primaryPink"
                    onClick={() => setOpenCaret(!openCaret)}
                  >
                    Annual Reports
                  </button>
                  {openCaret && (
                    <ul className="bg-white shadow-[0px_0px_8px_2px_rgba(0,0,0,0.20)] w-40 px-2 py-3 rounded absolute max-h-[120px] overflow-y-auto z-10">
                      {reports.map((report) => (
                        <li key={report._id} className="hover:bg-gray-200 p-2">
                          <a
                            href={report?.link}
                            target="_blank"
                            rel="noreferrer"
                            className="block text-black"
                          >
                            {report.year}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              )}
            </ul>
          </article>
          <article className="">
            <h2 className="text-xl md:text-[32px] font-bold capitalize  font-figtree">
              about us
            </h2>

            <ul className="flex flex-col gap-[15px] mt-3">
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
            <h2 className="text-xl md:text-[32px] font-bold capitalize  font-figtree">
              community
            </h2>
            <ul className="flex flex-col gap-[15px] mt-3">
              {communityLinks.map((menu, i) => {
                return !menu.isNewsLetter ? (
                  <li
                    className="text-base font-normal hover:text-primaryPink"
                    key={i}
                  >
                    <a href={menu.path}>{menu.pathname}</a>
                  </li>
                ) : (
                  <li
                    className="text-base font-normal hover:text-primaryPink"
                    key={i}
                  >
                    <button onClick={() => setShowNewsLetterModal(true)}>
                      {menu.pathname}
                    </button>
                  </li>
                );
              })}

              <li className="font-figtree">
                <h3 className="text-base font-normal font-figtree">
                  Follow Us On Social Media
                </h3>
                <ul className="mt-2.5 flex items-center gap-2.5">
                  <li className="w-[20.58px] h-[21px] flex items-center justify-center rounded-[50%] bg-primaryPink">
                    <Link
                      to="https://www.linkedin.com/company/she-code-africa/"
                      title="Follow us on Linkedin"
                      target="_blank"
                      rel="noreferrer"
                      className=" text-white"
                    >
                      <FaLinkedinIn className="size-3" />
                    </Link>
                  </li>
                  <li className="w-[20.58px] h-[21px] flex items-center justify-center rounded-[50%] bg-primaryPink">
                    <Link
                      to="https://www.facebook.com/shecodeafrica/"
                      title="Follow us on Facebook"
                      target="_blank"
                      rel="noreferrer"
                      className=" text-white"
                    >
                      <FaFacebookF className="size-3" />
                    </Link>
                  </li>
                  <li className="w-[20.58px] h-[21px] flex items-center justify-center rounded-[50%] bg-primaryPink">
                    <Link
                      to="https://www.youtube.com/channel/UCNZzVEyJege5-d_ekKw6dFA"
                      title="Subscribe to our Youtube channel"
                      target="_blank"
                      rel="noreferrer"
                      className=" text-white"
                    >
                      <FaYoutube className="size-3" />
                    </Link>
                  </li>
                  <li className="w-[20.58px] h-[21px] flex items-center justify-center rounded-[50%] bg-primaryPink">
                    <Link
                      to="https://www.instagram.com/shecodeafrica/"
                      title="Follow us on Instagram"
                      target="_blank"
                      rel="noreferrer"
                      className=" text-white"
                    >
                      <FaInstagram className="size-3" />
                    </Link>
                  </li>
                  <li className="w-[20.58px] h-[21px] flex items-center justify-center rounded-[50%] bg-primaryPink">
                    <Link
                      to="https://www.twitter.com/shecodeafrica/"
                      title="Follow us on Twitter"
                      target="_blank"
                      rel="noreferrer"
                      className=" text-white"
                    >
                      <FaTwitter className="size-3" />
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </article>

          {/*  */}
          <figure className="max-w-[141px] md:hidden w-full h-[141px]">
            <img src={badge} alt="Badge" />
          </figure>
        </section>
        {/*  */}
        <figure className="max-w-[141px] w-full h-[141px] hidden md:block">
          <img src={badge} alt="Badge" />
        </figure>
      </div>

      <div className="bg-primaryPink pt-[29px] pb-[30px] px-5">
        <p className="text-white text-base text-center w-full font-normal">
          All rights reserved. She Code Africa {new Date().getFullYear()}.
        </p>
      </div>

      {showNewsLetterModal && (
        <NewsLetter setShowNewsLetterModal={setShowNewsLetterModal} />
      )}
    </footer>
  );
};

export default Footer;
