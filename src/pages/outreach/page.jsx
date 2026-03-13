import React, { useState } from "react";
import { GlobalLayout } from "../../components";
import { outreachStates, outreachApproach } from "../../utils/appData";
import { ourImpactBg, getInvolvedBg } from "../../assets/images";
import { FaCalendarAlt } from "react-icons/fa";

const CARDS_PER_PAGE = 4;

const OutreachPage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(outreachStates.length / CARDS_PER_PAGE);
  const startIdx = (currentPage - 1) * CARDS_PER_PAGE;
  const visibleStates = outreachStates.slice(
    startIdx,
    startIdx + CARDS_PER_PAGE
  );

  return (
    <GlobalLayout>
      {/* Hero Section */}
      <section
        className="relative py-20 md:py-32 text-white -mt-8"
        style={{ backgroundColor: "#C78FFF" }}
      >
        <div className="absolute inset-0 bg-black/35" />
        <div className="relative z-10 w-[90%] max-w-[1280px] mx-auto text-center gap-2.5">
          <h1 className="font-semibold text-5xl md:text-9xl md:leading-tight text-[#FEFEFE]">
            Our Reach
          </h1>
          <p className="md:w-[70%] mx-auto text-base md:text-2xl md:leading-8 text-[#FEFEFE] font-medium">
            The STEM-A-Girl Initiative has successfully impacted over 3,000
            girls across multiple states in Nigeria, introducing young African
            girls to the exciting world of STEM education.
          </p>
        </div>
      </section>

      {/* Our Footprints Section */}
      <section className="relative py-16 md:py-24 overflow-hidden bg-[#FFF5FA]">
        <img
          src={ourImpactBg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />
        <div className="relative z-10 w-[90%] max-w-[1280px] mx-auto">
          <h2 className="text-center font-semibold text-3xl md:text-6xl text-primaryPink mb-12">
            Our Footprints Across Multiple States
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {visibleStates.map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#E1E6ED] rounded-2xl shadow-sm p-4 flex flex-col gap-4"
              >
                {/* Image with thick pink border frame */}
                <div className="rounded-xl overflow-hidden">
                  <img
                    src={item.image}
                    alt={`${item.state} outreach`}
                    className="w-full h-auto"
                  />
                </div>

                {/* Card Content */}
                <div className="flex flex-col gap-1 px-1">
                  <h3 className="font-figtree font-bold text-base text-[#5C0335]">
                    {item.state}
                  </h3>
                  <p className="font-figtree text-sm font-medium text-[#5C0335]">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between mt-2">
                    <div className="font-figtree flex items-center gap-2 text-[#5C0335] text-sm">
                      <FaCalendarAlt size={13} />
                      <span>{item.date}</span>
                    </div>
                    <a
                      href={item.driveLink}
                      target="_blank"
                      rel="noreferrer"
                      className="font-figtree border border-primaryPink text-primaryPink text-base font-medium px-4 py-1.5 rounded-lg transition-colors"
                    >
                      View all Images
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-3 mt-12">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-8 h-8 flex items-center justify-center rounded-full text-sm font-medium transition-colors ${
                      currentPage === page
                        ? "bg-primaryPink text-white"
                        : "border border-primaryPink text-primaryPink hover:bg-primaryPink hover:text-white"
                    }`}
                  >
                    {page}
                  </button>
                )
              )}
            </div>
          )}
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-16 md:py-24 bg-primaryPink">
        <div className="w-[90%] max-w-[860px] mx-auto">
          <h2 className="text-center font-bold text-4xl md:text-6xl text-white mb-4">
            Our Approach
          </h2>
          <p className="text-center text-white text-base md:text-xl mb-12 font-medium">
            Our meticulously planned 4-day program creates a meaningful impact
            through
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {outreachApproach.map((item, idx) => (
              <div
                key={idx}
                className={`${(Math.floor(idx / 2) + idx % 2) % 2 === 0 ? "bg-[#FF8FCE]" : "bg-[#FFB8E0]"} rounded-2xl p-8 flex flex-col items-center text-center gap-3`}
              >
                <h3 className="font-figtree font-bold text-xl md:text-3xl text-black">
                  {item.title}
                </h3>
                <p className="text-base md:text-xl text-[#210D15]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsor an Outreach Section */}
      <section
        className="py-20 md:py-28 bg-cover bg-center text-center"
        style={{ backgroundImage: `url(${getInvolvedBg})` }}
      >
        <div className="w-[90%] max-w-[860px] mx-auto flex flex-col items-center gap-6">
          <h2 className="font-bold text-4xl md:text-6xl text-white">
            Sponsor an Outreach
          </h2>
          <p className="text-white text-base md:text-xl font-medium leading-relaxed">
            Help us expand our reach to more schools and communities across
            Nigeria.
            <br />
            Together, we can inspire the next generation of female innovators
            and leaders in STEM fields.
          </p>
          <a
            href="/contact-us"
            className="bg-primaryPink text-white text-base font-normal px-8 py-4 rounded-lg hover:opacity-90 transition-opacity"
          >
            Contact Us
          </a>
        </div>
      </section>
    </GlobalLayout>
  );
};

export default OutreachPage;
