import { useState } from "react";
import { faqs } from "../../utils/appData";
import Accordion from "../accordion";
import { FaArrowRight } from "react-icons/fa6";

const PREVIEW_COUNT = 5;

const FAQ = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleFaqs = showAll ? faqs : faqs.slice(0, PREVIEW_COUNT);

  return (
    <section className="w-full py-16 md:py-20 bg-[#FFB8E0]" id="faq">
      <div className="w-[90%] max-w-[700px] mx-auto flex flex-col items-center gap-8">
        <div className="text-center">
          <h2 className="text-4xl md:text-6xl font-semibold text-primaryPink">FAQs</h2>
          <p className="text-black text-base font-medium md:text-2xl mt-2">
            Curious about our STEM Initiative? We've got answers!
          </p>
        </div>

        <div className="w-full flex flex-col gap-4">
          {visibleFaqs.map(({ title, content, list }, i) => (
            <Accordion title={title} content={content} key={i} list={list} />
          ))}
        </div>

        {!showAll && (
          <button
            onClick={() => setShowAll(true)}
            className="flex items-center gap-2 text-primaryPink text-base md:text-2xl font-semibold hover:opacity-80 transition-opacity"
          >
            View all questions <FaArrowRight />
          </button>
        )}
      </div>
    </section>
  );
};

export default FAQ;
