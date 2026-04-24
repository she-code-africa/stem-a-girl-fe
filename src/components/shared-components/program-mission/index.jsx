import { programMissionImg } from "../../../assets/images";

const ProgramMission = () => {
  return (
    <section className="w-full overflow-hidden">
      <div className="relative max-w-[1440px] mx-auto">
      <img
        src={programMissionImg}
        alt=""
        className="w-full block"
        loading="lazy"
      />

      <div className="absolute bottom-0 left-0 w-[68%] md:w-[70%] pb-0 min-[375px]:pb-2 min-[425px]:pb-5 md:pb-6 lg:pb-5 xl:pb-12 pl-4 min-[375px]:pl-5 md:pl-10 lg:pl-14 xl:pl-16 pr-2">
        <h3 className="font-figtree text-[#FFF88F] font-bold text-sm md:text-2xl lg:text-[32px] md:mb-2 lg:mb-3">
          Program Mission
        </h3>
        <p className="text-white text-[0.5rem] mb-1 md:mb-0 md:text-base lg:text-2xl leading-tight md:leading-snug max-w-[700px] font-medium">
          Our mission is to bridge the significant gender gap in STEM fields by 
          providing young girls with STEM education, mentorship, and hands-on 
          experiences that could shape their futures.
        </p>
      </div>
      </div>
    </section>
  );
};

export default ProgramMission;
