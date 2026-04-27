import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { GlobalLayout } from "../../components";
import { outreachApproach } from "../../utils/appData";
import { ourImpactBg, getInvolvedBg } from "../../assets/images";
import { FaCalendarAlt } from "react-icons/fa";
import { getOutreach } from "../../services/queries";
import Calendar from "../../components/shared-components/icons/Calendar";
import ApiLoading from "../../components/loaders/ApiLoading";

const CARDS_PER_PAGE = 4;

const OutreachPage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const { data: outreachData, isLoading: isOutreachLoading } = useQuery({
    queryKey: ["outreach"],
    queryFn: getOutreach,
  });

  const states = outreachData ?? [];
  const totalPages = Math.ceil(states.length / CARDS_PER_PAGE);
  const startIdx = (currentPage - 1) * CARDS_PER_PAGE;
  const visibleStates = states.slice(startIdx, startIdx + CARDS_PER_PAGE);

  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", { month: "long", year: "numeric" });
  };

  return (
    <GlobalLayout>
      {/* Hero Section */}
      <section
        className="relative pt-28 pb-20 md:pt-40 md:pb-32 text-white -mt-8"
        style={{ backgroundColor: "#C78FFF" }}
      >
        <div className="absolute inset-0 bg-black/35" />
        <div className="relative z-10 w-[90%] max-w-[1280px] mx-auto text-center gap-2.5">
          <h1 className="font-semibold text-5xl md:text-9xl md:leading-tight text-[#FEFEFE]">
            Our Reach
          </h1>
          <p className="md:w-[70%] mx-auto text-base md:text-2xl md:leading-8 text-[#FEFEFE] font-medium">
            The STEM-A-Girl Initiative has successfully impacted over 3,000
            girls across multiple Cities in Nigeria, introducing young African
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
        <div className="relative w-[90%] max-w-[1280px] mx-auto">
          <h2 className="text-center font-semibold text-3xl md:text-6xl text-primaryPink mb-12">
            Our Footprints Across Multiple States
          </h2>

          {isOutreachLoading && <ApiLoading variant="two-column" />}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full max-w-[960px] mx-auto place-items-center">
            {visibleStates.map((item, idx) => (
              <div
                key={item._id ?? idx}
                className="bg-white border border-[#E1E6ED] max-w-[452px] rounded-2xl shadow-sm p-4 lg:p-5 flex flex-col "
              >
                {/* 2x2 image grid with pink border frame */}
                <div className="rounded-2xl w-full py-[18px] space-y-[11px] bg-primaryPink ">
                  <div className="flex w-full gap-[13px] px-[15px] justify-center">
                    {item.previewImages.slice(0, 2).map((img, i) => (
                      <div
                        className={` rounded-lg overflow-hidden ${i % 2 === 0 ? "w-full max-w-[231px] sm:max-w-auto sm:w-[231px]" : "w-full sm:max-w-auto sm:w-[138px] max-w-[138px]"} h-[205px]`}
                        key={i}
                      >
                        <img
                          src={img}
                          alt={`${item.state} outreach ${i + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>

                  <div className="flex w-full gap-[13px] px-[15px] justify-center">
                    {item.previewImages.slice(2, 4).map((img, i) => (
                      <figure
                        className={`w-full rounded-lg overflow-hidden ${i % 2 === 0 ? "w-full max-w-[231px] sm:max-w-auto sm:w-[231px]" : "w-full sm:max-w-auto sm:w-[138px] max-w-[138px]"} h-[90px]`}
                        key={i}
                      >
                        <img
                          src={img}
                          alt={`${item.state} outreach ${i + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </figure>
                    ))}
                  </div>
                </div>

                {/* Card Content */}
                <div className="flex flex-col gap-1 px-1 mt-6">
                  <h3 className="font-figtree font-bold text-base text-[#5C0335]">
                    {item.state}
                  </h3>
                  <p className="font-figtree  mt-2 text-sm font-medium text-[#5C0335]">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between mt-4">
                    <div className="font-figtree flex items-center gap-[2.5] text-[#5C0335] text-sm">
                      <Calendar />
                      <span className="inline-flex items-center justify-center">
                        {formatDate(item.outreachDate)}
                      </span>
                    </div>
                    {item.galleryLink ? (
                      <a
                        href={item.galleryLink}
                        target="_blank"
                        rel="noreferrer"
                        className="font-figtree border border-primaryPink text-primaryPink text-base font-medium w-full max-w-[141px] h-8 flex hover:bg-primaryPink hover:text-white duration-300 items-center justify-center rounded-lg transition-colors"
                      >
                        View all Images
                      </a>
                    ) : (
                      <span className="font-figtree border border-[#E1E6ED] text-[#aaa] text-base font-medium w-full max-w-[141px] h-8 flex  items-center justify-center rounded-lg cursor-not-allowed">
                        View all Images
                      </span>
                    )}
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
                ),
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
                className={`${(Math.floor(idx / 2) + (idx % 2)) % 2 === 0 ? "bg-[#FF8FCE]" : "bg-[#FFB8E0]"} rounded-2xl p-8 flex flex-col items-center justify-center text-center gap-3`}
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
            href="mailto:programs@shecodeafrica.org"
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
