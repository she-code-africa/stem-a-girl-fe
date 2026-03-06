import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";

const Accordion = ({ title, content, list }) => {
  const [showContent, setShowContent] = useState(false);
  return (
    <div className="bg-primaryPink rounded-2xl p-4 lg:p-5">
      <div
        className="flex justify-between items-center cursor-pointer gap-4"
        onClick={() => setShowContent(!showContent)}
      >
        <p className="font-medium md:text-lg text-white">{title}</p>
        {showContent ? (
          <FaMinus className="text-white shrink-0" />
        ) : (
          <FaPlus className="text-white shrink-0" />
        )}
      </div>

      {showContent && list === false && (
        <p className="mt-4 pl-8 text-sm md:text-base text-white/90 leading-relaxed">
          {content}
        </p>
      )}

      {showContent && list === true && (
        <ul className="mt-4 flex flex-col gap-1 pl-8 text-sm md:text-base text-white/90">
          {content.map((item, i) => (
            <li key={i} className="list-disc">
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Accordion;
