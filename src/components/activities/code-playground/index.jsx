import React from "react";
import { FaCheck, FaExternalLinkAlt } from "react-icons/fa";

const CodePlayground = () => {
  return (
    <div className="bg-white py-7 lg:px-16 px-5 rounded-lg max-w-[90%] w-full mx-auto mt-7">
      <div className="flex justify-between lg:mb-2 mb-10 ">
        <a
          href="/activities/coding"
          className="hover:text-primaryPink transition-all"
        >
          Back
        </a>
        <a
          href="https://codeplayground.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primaryPink transition-all"
        >
          <FaExternalLinkAlt />
        </a>
      </div>
      <h2 className="text-2xl md:text-3xl lg:text-4xl mb-7 text-center">
        Explore Code Playground
      </h2>
      <div className="flex mb-5 lg:justify-center flex-wrap gap-2 w-full">
        <div className="flex items-center gap-2">
          <span className="text-primaryPink">
            <FaCheck />
          </span>
          <p>HTML: The Building Blocks of Websites</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-primaryPink">
            <FaCheck />
          </span>
          <p>CSS: Style Your Website Like a Pro</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-primaryPink">
            <FaCheck />
          </span>
          <p>JavaScript: Bring Your Website to Life</p>
        </div>
      </div>
      <h2 className="font-semibold text-lg my-4">Description</h2>
      <hr className="border-primaryPink mb-5" />
      <p className="mb-10">
        This Playground allows you to experiment with code without having to
        set up your own development environment. You can write HTML code to
        structure the content of your webpage, CSS code to style the appearance
        of your webpage, and JavaScript code to add interactivity to your
        webpage. The playground will then execute your code and display the
        results in a preview pane.
      </p>
      <div className="h-[70vh] overflow-y-auto mb-10">
        <iframe
          src="https://codeplayground.vercel.app/"
          style={{ width: "100%", height: "100%", border: "none" }}
          title="Code Playground"
        ></iframe>
      </div>
    </div>
  );
};

export default CodePlayground;
