import React, { useState } from "react";
import GlobalLayout from "../layouts/GlobalLayout";
import { Link } from "react-router-dom";
import ArrowLeft from "../shared-components/icons/ArrowLeft";
import preview from "../../assets/images/certificate.png";

const CertificatesPage = () => {
  const [certificates, setCertificates] = useState([
    { courseName: "Product Management" },
  ]);
  return (
    <>
      <GlobalLayout>
        <div className="w-full min-h-screen bg-[#FDF2F8] py-20">
          <div
            className={`w-[90%] max-w-[1256px] xl:w-full mx-auto bg-white rounded-[23.94px] ${certificates.length > 0 ? "min-h-[682px]" : ""}`}
          >
            <div className="w-[90%] xl:w-full max-w-[1141.11px] mx-auto py-9 sm:py-[67.02px]">
              <h3
                className={`font-figtree text-primaryPink font-extrabold text-center text-[32px] sm:text-[40px] `}
              >
                My Certificates
              </h3>

              {certificates.length > 0 ? (
                <section className="rounded-[14px] mt-[30px] drop-shadow-sm p-[26px] flex md:flex-row flex-col md:justify-between gap-5 md:items-center border-[1.6px] border-[#E5E7EB]">
                  <div className="flex items-center w-full gap-[20.5px]">
                    <img
                      src={preview}
                      className="w-[173px] h-[114px] rounded-[10px] border-[0.5px] border-primaryPink overflow-hidden"
                      alt="Certificate Preview"
                    />

                    <h4 className="font-figtree text-lg sm:text-xl font-bold text-[#101828]">
                      Coding From Scratch
                    </h4>
                  </div>

                  <div className="w-full max-w-[214px]">
                    <a
                      href="/"
                      download="Coding From Scratch Certificate"
                      className="w-full h-[55px] flex items-center justify-center rounded-lg hover:bg-primaryBtnHover bg-primaryPink text-white text-base"
                    >
                      Download certificate
                    </a>
                  </div>
                </section>
              ) : (
                <>
                  <p className="mt-[50px] w-full text-center text-lg sm:text-xl ">
                    You currently have no certificates.
                  </p>
                  <p className=" w-full text-center text-lg sm:text-xl ">
                    Kindly complete at least one course to get your certificate.
                  </p>

                  <Link
                    className="flex mt-[30px] text-base sm:text-lg font-medium items-center justify-center text-primaryPink max-w-[147px] mx-auto gap-1"
                    to="/courses"
                  >
                    <ArrowLeft /> Back to courses
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </GlobalLayout>
    </>
  );
};

export default CertificatesPage;
