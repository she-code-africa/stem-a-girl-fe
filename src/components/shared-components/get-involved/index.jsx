import React, { useState } from "react";
import { getInvolvedHeroImg, getInvolvedBg } from "../../../assets/images";
import ShareModal from "../share-modal";
import { getInvolvedBulletPoints as bulletPoints } from "../../../utils/appData";

const GetInvolved = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section
        className="w-full py-16 md:py-20 mt-16 md:mt-24 bg-cover bg-center"
        style={{ backgroundImage: `url(${getInvolvedBg})` }}
      >
        <div className="w-[90%] max-w-[1280px] mx-auto">
          <div className="bg-white rounded-2xl flex flex-col lg:flex-row p-6 md:p-8 gap-6 lg:gap-8 items-center">
            <div className="flex-1 flex flex-col gap-5 justify-center">
              <h2 className="text-[#7D355D] font-semibold text-3xl md:text-4xl lg:text-5xl">
                Get Involved
              </h2>
              <p className="text-black text-base md:text-lg font-normal">
                As a student, teacher, or parent, help us inspire more African
                girls <br />to kick start their journey into STEM!
              </p>
              <ul className="text-black font-normal border-l-4 border-[#B70569] pl-4 flex flex-col gap-3 max-w-[379px]">
                {bulletPoints.map((point, i) => (
                  <li key={i} className="text-black text-base md:text-lg">
                    {point}
                  </li>
                ))}
              </ul>
              <div>
                <button
                  onClick={() => setModalOpen(true)}
                  className="bg-[#B70569] text-white font-regular text-base px-6 py-3 rounded-lg hover:bg-[#9a0458] transition-colors"
                >
                  Share Courses
                </button>
              </div>
            </div>
            <div className="w-full lg:w-[45%] flex-shrink-0 h-[280px] lg:h-[360px]">
              <img
                src={getInvolvedHeroImg}
                alt="Get involved"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <ShareModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
};

export default GetInvolved;
