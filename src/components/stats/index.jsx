import { stats } from "../../utils/appData";

const Stats = () => {
  return (
    <div className="border-b-4 border-r-4 border-[#B70569] w-full max-w-[95%] md:max-w-[80%] mx-auto my-10 rounded-2xl">
      <div className="border-black border-[0.3px] py-6 rounded-xl max-md:px-4">
        <div className=" flex justify-between max-w-xl mx-auto">
          {stats.map(({ title, stat }) => (
            <div className="text-center space-y-1">
              <h2 className="text-[#B70569] font-bold text-2xl md:text-3xl lg:text-5xl">
                {stat}
              </h2>
              <p className="text-xs md:text-xl">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
