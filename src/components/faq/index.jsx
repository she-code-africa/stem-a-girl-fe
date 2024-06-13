import { faqImage } from "../../assets/images";
import { faqs } from "../../utils/appData";
import Accordion from "../accordion";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";

const FAQ = () => {
  return (
    <section className="bg-[#F8F8F8] py-6 my-14" id="faq">
      <div className="py-8">
        <div className="bg-[#F8F8F8] py-16">
          <div className="w-[90%] max-w-[1280px] mx-auto grid md:grid-cols-2 gap-4 md:gap-6 lg:gap-4">
            <div className="space-y-10 xl:w-10/12">
              <h2 className="text-[28px] leading-10 md:text-3xl lg:text-[44px] lg:leading-[68px]">
                <span className="font-bold">
                  {" "}
                  Curious about our STEM Initiative?{" "}
                </span>
                Get informed and empowered with our FAQs
              </h2>
              <img
                src={faqImage}
                alt="girl-child"
                className="rounded-2xl h-60 w-full md:w-[420px] object-cover cursor-pointer"
              />
            </div>
            <div className="space-y-3 lg:space-y-6">
              {faqs.map(({ title, content }, i) => (
                <Accordion title={title} content={content} key={i} />
              ))}

              <div className="flex justify-end">
                <Link
                  to="/contact-us"
                  className="text-white capitalize w-full max-w-[176px] h-[43px] rounded-[30px] text-sm flex items-center justify-center bg-primaryPink border-2 border-primaryPink hover:bg-transparent hover:text-primaryPink transition-all gap-2"
                >
                  see more{" "}
                  <span className="text-sm flex items-center justify-center w-[24px] h-[24px] rounded-[50%] bg-white text-primaryPink">
                    <FaAngleRight />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
