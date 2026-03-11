import { getInvolvedBg, stemGirl } from "../../../assets/images";

const StemClubCTA = () => {
  return (
    <section
      className="w-full py-16 md:py-20 bg-cover bg-center"
      style={{ backgroundImage: `url(${getInvolvedBg})` }}
    >
      <div className="w-[90%] max-w-[1280px] mx-auto">
        <div className="bg-white rounded-3xl flex flex-col lg:flex-row p-6 md:p-8 gap-6 lg:gap-8 items-center">
          <div className="flex-1 flex flex-col gap-6 justify-center mx-6 xl:mx-12">
            <h2 className="text-[#5C0335] font-semibold text-3xl md:text-4xl lg:text-6xl leading-tight">
              Need to set up a STEM <br />Club in your school?
            </h2>
            <div className="flex items-center gap-4 flex-wrap">
              <a
                href="mailto:stemclub@shecodeafrica.org"
                className="bg-primaryPink text-white text-base font-normal px-6 py-3 rounded-lg hover:opacity-90 transition-opacity hover:bg-[#5C0335]"
              >
                Send a Mail
              </a>
              <a
                href="https://forms.gle/d2Vqo27vZNSQBzBe9"
                target="_blank"
                rel="noreferrer"
                className="border border-[#5C0335] text-primaryPink text-base font-normal px-6 py-3 rounded-lg hover:border-primaryPink transition-colors"
              >
                Fill Request Form
              </a>
            </div>
          </div>
          <div className="w-full lg:w-[50%] flex-shrink-0 h-[280px] lg:h-[360px]">
            <img
              src={stemGirl}
              alt="Students at a STEM Club"
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StemClubCTA;
