import { useState } from "react";
import { RxCaretUp } from "react-icons/rx";

const Accordion = ({ title, content, list }) => {
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
      {showContent && list === false && (
        <p className="mt-5 max-md:text-sm text-[#210D15]">{content}</p>
      )}

      {showContent && list === true && (
        <ol className="mt-5 mx-6 max-md:text-sm text-[#210D15]">
          {content.map((item, i) => (
            <li key={i} className="list-decimal">
              {item}
            </li>
          ))}
        </ol>
      )}
    </div>
  );
};

export default Accordion;
