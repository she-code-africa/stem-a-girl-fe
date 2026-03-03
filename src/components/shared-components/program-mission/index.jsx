import {
  programMissionPinkBg,
  programMissionYellowBg,
  programMissionGirl,
} from "../../../assets/images";

const ProgramMission = () => {
  return (
    <section className="w-full relative overflow-hidden">
      {/* Girl photo — full width base */}
      <img
        src={programMissionGirl}
        alt=""
        className="w-full block object-cover max-h-[300px] md:max-h-none"
      />

      {/* Yellow textured panel — absolutely on the right, full height */}
      <div className="absolute top-0 right-0 h-full w-[22%] z-10">
        <img
          src={programMissionYellowBg}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* Pink diagonal shape at the bottom with text */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="relative">
          <img
            src={programMissionPinkBg}
            alt=""
            className="w-full max-md:h-[160px] max-md:object-fill"
          />
          <div className="absolute inset-0 flex flex-col justify-center pl-6 pr-8 md:px-10 lg:px-16 pt-10 md:pt-20 pb-4">
            <h3 className="text-[#F5C142] font-bold text-sm md:text-2xl lg:text-3xl mb-2 md:mb-3">
              Program Mission
            </h3>
            <p className="text-white text-[0.5rem] md:text-base lg:text-2xl max-w-[600px] leading-snug">
              Our mission is to bridge the significant gender gap in STEM
              fields by providing young girls with STEM education,
              mentorship, and hands-on experiences that could shape their
              futures.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramMission;
