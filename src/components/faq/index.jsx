import { girlChild } from "../../assets/images";
import { faqs } from "../../utils/appData";
import Accordion from "../accordion";

const FAQ = () => {
  return (
    <section className="bg-[#F8F8F8] py-6 my-14">
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
                src={girlChild}
                alt="girl-child"
                className="rounded-2xl h-60 w-full md:w-[420px] object-cover"
              />
            </div>
            <div className="space-y-3 lg:space-y-6">
              {faqs.map(({ title, content }) => (
                <Accordion title={title} content={content} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
