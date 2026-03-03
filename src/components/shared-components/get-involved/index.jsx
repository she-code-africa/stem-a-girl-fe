import React, { useState } from "react";
import { getInvolvedHeroImg, getInvolvedBg } from "../../../assets/images";
import ShareModal from "../share-modal";

const bulletPoints = [
  "Know a girl curious about tech, coding, or robotics? Share this platform with her.",
  "Take a Course, it is completely free",
  "Spread the Word",
];

const GetInvolved = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section
        className="w-full py-16 md:py-20 mt-16 md:mt-24 bg-cover bg-center"
        style={{ backgroundImage: `url(${getInvolvedBg})` }}
      >
        <div className="w-[90%] max-w-[1280px] mx-auto">
          <div className="bg-white rounded-2xl flex flex-col lg:flex-row overflow-hidden">
            <div className="flex-1 p-8 md:p-10 lg:p-12 flex flex-col gap-5 justify-center">
              <h2 className="text-[#7D355D] font-semibold text-3xl md:text-4xl lg:text-5xl">
                Get Involved
              </h2>
              <p className="text-black text-base md:text-lg font-normal">
                As a student, teacher, or parent, help us inspire more African
                girls to kick start their journey into STEM!
              </p>
              <ul className="text-black font-normal border-l-4 border-[#B70569] pl-4 flex flex-col gap-3">
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
            <div className="w-full lg:w-[45%] flex-shrink-0 max-h-[400px] lg:max-h-none">
              <img
                src={getInvolvedHeroImg}
                alt="Get involved"
                className="w-full h-full object-cover"
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
