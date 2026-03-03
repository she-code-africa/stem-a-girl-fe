import { ourImpactBg } from "../../../assets/images";
import { stats } from "../../../utils/appData";


const Stats = () => {
  return (
    <div className="w-full relative overflow-hidden bg-[#FFF5FA] py-12 md:py-16">
      <img
        src={ourImpactBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />

      <div className="relative w-[90%] max-w-[1280px] mx-auto">
        <h2 className="text-center text-[#B70569] text-2xl md:text-4xl lg:text-5xl font-bold mb-10 md:mb-14">
          Our Impact in Numbers
        </h2>

        <div className="flex flex-col md:flex-row justify-between items-center md:items-center gap-10 md:gap-6">
          {stats.map(({ title, stat }, i) => (
            <div className="flex items-center gap-4" key={i}>
              <span className="text-[#7D355D] font-bold text-4xl lg:text-7xl shrink-0 leading-none">
                {stat}
              </span>
              <p className="text-sm md:text-base lg:text-lg text-[#000000] max-w-[160px] leading-snug">
                {title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
