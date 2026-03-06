import { programMissionImg } from "../../../assets/images";

const ProgramMission = () => {
  return (
    <section className="w-full relative overflow-hidden">
      <img
        src={programMissionImg}
        alt=""
        className="w-full block"
        loading="lazy"
      />

      {/* Text overlay on the pink diagonal area */}
      <div className="absolute bottom-0 left-0 w-[65%] md:w-[58%] pb-0 min-[375px]:pb-2 md:pb-6 lg:pb-10 xl:pb-12 pl-4 min-[375px]:pl-5 md:pl-10 lg:pl-14 xl:pl-16 pr-2">
        <h3 className="text-[#F5C142] font-bold text-sm md:text-2xl lg:text-3xl xl:text-4xl md:mb-2 lg:mb-3">
          Program Mission
        </h3>
        <p className="text-white text-[0.5rem] mb-1 md:mb-0 md:text-base lg:text-lg xl:text-2xl leading-tight md:leading-snug max-w-[600px]">
          Our mission is to bridge the significant gender gap in STEM
          fields by providing young girls with STEM education,
          mentorship, and hands-on experiences that could shape their
          futures.
        </p>
      </div>
    </section>
  );
};

export default ProgramMission;
