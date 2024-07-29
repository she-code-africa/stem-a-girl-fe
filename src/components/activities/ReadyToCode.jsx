import React from "react";
import { Link } from "react-router-dom";
import { FaAngleRight,} from "react-icons/fa";
import { starImage } from "../../assets/images";



const ReadyToCode = () => {
  

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
            to="/code-playground"
            className="text-white capitalize w-full max-w-[250px] h-[53px] rounded-[30px] text-sm flex items-center justify-center bg-primaryPink border-2 border-primaryPink hover:bg-transparent hover:text-primaryPink transition-all gap-2"
          >
            Click here to explore
            <span className="text-sm flex items-center justify-center w-[24px] h-[24px] rounded-[50%] bg-white text-primaryPink">
              <FaAngleRight />
            </span>
          </Link>
        </div>
      </div>
      <img src={starImage} alt="" className="max-md:hidden right-64 bottom-16 absolute" />

    </section>
  );
};

export default ReadyToCode;
