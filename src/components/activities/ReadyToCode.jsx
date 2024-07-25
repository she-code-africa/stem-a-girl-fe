import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import { FaAngleRight, FaCheck, FaExternalLinkAlt } from "react-icons/fa";
import { starImage } from "../../assets/images";
const CodePlayground = ({ isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Code Playground"
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center overflow-y-auto"
      overlayClassName=" fixed inset-0 bg-black bg-opacity-50"
    >
      <div className="bg-white py-7 lg:px-16 px-5 rounded-lg max-w-[90%] w-full     lg:top-64 top-[400px] md:top-[200px] z-50 relative ">
        <div className="flex justify-between">
          <button
            className="  hover:text-primaryPink transition-all"
            onClick={onClose}
          >
            Back
          </button>
          <a
            href="https://codeplayground.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primaryPink transition-all"
          >
            <FaExternalLinkAlt />
          </a>
        </div>
        <h2 className="text-2xl md:text-3xl lg:text-4xl mb-4 text-center ">
          Explore Code Playground
        </h2>
        <div className="flex mb-5 lg:justify-center flex-wrap gap-2 w-full">
          <div className="flex items-center gap-2  ">
            <span className="text-primaryPink">
              <FaCheck />
            </span>
            <p>HTML: The Building Blocks of Websites</p>
          </div>
          <div className="flex items-center gap-2 ">
            <span className="text-primaryPink">
              <FaCheck />
            </span>
            <p>CSS: Style Your Website Like a Pro</p>
          </div>
          <div className="flex items-center gap-2  ">
            <span className="text-primaryPink">
              <FaCheck />
            </span>
            <p>JavaScript: Bring Your Website to Life</p>
          </div>
        </div>
        <h2 className="font-semibold text-lg my-4">Description</h2>
        <hr className="border-primaryPink  mb-5" />
        <p className="mb-10">
          This Playground allows you to experiment with code without having to
          set up your own development environment. You can write HTML code to
          structure the content of your webpage, CSS code to style the
          appearance of your webpage, and JavaScript code to add interactivity
          to your webpage. The playground will then execute your code and
          display the results in a preview pane.
        </p>
        <div className="h-[70vh] overflow-y-auto mb-10">
          <iframe
            src="https://codeplayground.vercel.app/"
            style={{ width: "100%", height: "100%", border: "none" }}
            title="Code Playground"
          ></iframe>
        </div>
      </div>
    </Modal>
  );
};

const ReadyToCode = () => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const openLightbox = () => {
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  return (
    <section
      className="my-3 md:my-20 bg-lavender pt-5 pb-2 relative"
      id="zero-tech-skills"
    >
      <img src={starImage} alt="" className="max-md:hidden left-28 top-16 absolute" />
      <div className="w-[90%] max-w-[1280px] mx-auto">
        <h4 className="font-medium text-2xl md:text-3xl lg:text-4xl leading-normal md:leading-normal lg:leading-normal text-center">
          <span className="text-primaryPink font-bold ">Ready to Code?</span>
          <br />
          Make your ideas come alive. Start coding today!
        </h4>
        <p className="text-fiord text-base md:text-lg leading-normal md:leading-normal text-center mt-3 max-w-[800px] md:mx-auto w-full">
          Unleash your creativity and build the future: empowering girls aged
          10-21 to pursue careers in Science, Technology, Engineering, and
          Mathematics (STEM).
        </p>
        <div className="flex justify-center my-7">
          <Link
            to="#"
            className="text-white capitalize w-full max-w-[250px] h-[53px] rounded-[30px] text-sm flex items-center justify-center bg-primaryPink border-2 border-primaryPink hover:bg-transparent hover:text-primaryPink transition-all gap-2"
            onClick={openLightbox}
          >
            Click here to explore
            <span className="text-sm flex items-center justify-center w-[24px] h-[24px] rounded-[50%] bg-white text-primaryPink">
              <FaAngleRight />
            </span>
          </Link>
        </div>
      </div>
      <img src={starImage} alt="" className="max-md:hidden right-64 bottom-16 absolute" />
      <CodePlayground isOpen={isLightboxOpen} onClose={closeLightbox} />

    </section>
  );
};

export default ReadyToCode;
