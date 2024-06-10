import { useState } from "react";
import { RxCaretUp } from "react-icons/rx";

const Accordion = ({ title, content }) => {
  const [showContent, setShowContent] = useState(false);
  return (
    <div className="bg-white rounded-2xl p-3.5 lg:p-6">
      <div className="flex justify-between items-center">
        <p className="font-bold md:text-lg">{title}</p>
        <RxCaretUp
          size="1.25rem"
          color="#B70569"
          onClick={() => setShowContent(!showContent)}
          className={`${showContent ? "" : "rotate-180"}`}
        />
      </div>
      {showContent && (
        <p className="mt-5 max-md:text-sm text-[#210D15]">{content}</p>
      )}
    </div>
  );
};

export default Accordion;
